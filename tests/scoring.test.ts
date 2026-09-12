import { describe, expect, it } from 'vitest';
import { PRODUCTS, getProduct } from '@/data/products';
import { rankProducts, scoreProduct } from '@/lib/scoring/engine';
import type { FinderAnswers } from '@/types/finder';

function answers(partial: Partial<FinderAnswers>): FinderAnswers {
  return {
    industry: 'hvac',
    technicians: '2-5',
    businessModel: 'residential',
    requiredFeatures: ['scheduling', 'invoicing'],
    accounting: 'quickbooks_online',
    budget: '100_250',
    ...partial,
  };
}

const slugOf = (r: { productSlug: string }) => r.productSlug;

describe('Fit Score engine — buyer scenarios (spec §79)', () => {
  it('5-technician HVAC company favors capable SMB tools and stays normalized', () => {
    const a = answers({ industry: 'hvac', technicians: '2-5', requiredFeatures: ['scheduling', 'dispatching', 'invoicing', 'payments'], budget: '250_500' });
    const ranked = rankProducts(a, PRODUCTS, { limit: 5 });
    expect(ranked.length).toBeGreaterThan(0);
    ranked.forEach((r) => {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(100);
      expect(Number.isInteger(r.score)).toBe(true);
    });
    // A small residential HVAC team should see small-business tools near the top.
    const topSlugs = ranked.slice(0, 3).map(slugOf);
    expect(topSlugs.some((s) => ['jobber', 'housecall-pro', 'workiz', 'fieldpulse'].includes(s))).toBe(true);
  });

  it('solo plumber on a tight budget ranks SMB tools above enterprise (budget + trade weighting)', () => {
    const a = answers({ industry: 'plumbing', technicians: 'solo', businessModel: 'residential', budget: 'under_100', requiredFeatures: ['scheduling', 'invoicing', 'payments'] });
    const jobber = scoreProduct(a, getProduct('jobber')!);
    const servicetitan = scoreProduct(a, getProduct('servicetitan')!);
    expect(jobber.score).toBeGreaterThan(servicetitan.score);
    // Enterprise cost tier vs a tiny budget should surface a budget concern.
    expect(servicetitan.flags.some((f) => /budget/i.test(f.reason))).toBe(true);
  });

  it('20-technician HVAC company with enterprise needs rates ServiceTitan strongly', () => {
    const a = answers({
      industry: 'hvac',
      technicians: '11-25',
      businessModel: 'both',
      requiredFeatures: ['dispatching', 'pricebook', 'service_agreements', 'financing', 'reporting'],
      budget: '1000_2500',
    });
    const servicetitan = scoreProduct(a, getProduct('servicetitan')!);
    expect(servicetitan.excluded).toBe(false);
    expect(servicetitan.score).toBeGreaterThanOrEqual(70);
    const ranked = rankProducts(a, PRODUCTS, { limit: 5 }).map(slugOf);
    expect(ranked).toContain('servicetitan');
  });

  it('commercial mechanical contractor favors commercial platforms over residential SMB tools', () => {
    const a = answers({
      industry: 'commercial',
      technicians: '51-100',
      businessModel: 'commercial',
      requiredFeatures: ['job_costing', 'inventory', 'dispatching', 'reporting'],
      budget: '2500_plus',
    });
    const jobber = scoreProduct(a, getProduct('jobber')!);
    const buildops = scoreProduct(a, getProduct('buildops')!);
    expect(buildops.score).toBeGreaterThan(jobber.score);
    const top = rankProducts(a, PRODUCTS, { limit: 3 }).map(slugOf);
    expect(top.some((s) => ['buildops', 'servicetitan', 'simpro', 'servicetrade'].includes(s))).toBe(true);
  });

  it('10-technician landscaping company gets sensible, normalized recommendations', () => {
    const a = answers({
      industry: 'landscaping',
      technicians: '6-10',
      businessModel: 'route',
      requiredFeatures: ['scheduling', 'recurring_jobs', 'invoicing', 'customer_notifications'],
      budget: '250_500',
    });
    const ranked = rankProducts(a, PRODUCTS, { limit: 5 });
    expect(ranked.length).toBeGreaterThan(0);
    expect(ranked[0].score).toBeGreaterThanOrEqual(ranked[ranked.length - 1].score);
  });

  it('pest-control route business gets route-friendly matches', () => {
    const a = answers({
      industry: 'pest-control',
      technicians: '6-10',
      businessModel: 'route',
      requiredFeatures: ['recurring_jobs', 'scheduling', 'invoicing'],
      budget: '100_250',
    });
    const ranked = rankProducts(a, PRODUCTS, { limit: 5 });
    expect(ranked.length).toBeGreaterThan(0);
    ranked.forEach((r) => expect(r.excluded).toBe(false));
  });
});

describe('Hard exclusions (spec §10)', () => {
  it('excludes a product when a REQUIRED capability is explicitly not available', () => {
    // Jobber's feature matrix marks route_optimization as not_available.
    const a = answers({ industry: 'landscaping', requiredFeatures: ['route_optimization'] });
    const jobber = scoreProduct(a, getProduct('jobber')!);
    expect(jobber.excluded).toBe(true);
    expect(jobber.score).toBe(0);
    expect(jobber.flags.some((f) => f.kind === 'exclude')).toBe(true);
    // Excluded products are dropped from the default ranked results.
    const ranked = rankProducts(a, PRODUCTS, { limit: 15 }).map(slugOf);
    expect(ranked).not.toContain('jobber');
  });

  it('warns (does not exclude) when accounting integration is explicitly missing', () => {
    // Jobber marks quickbooks_desktop as not_available (verified: Jobber is QuickBooks Online only).
    const a = answers({ accounting: 'quickbooks_desktop', requiredFeatures: ['scheduling'] });
    const jobber = scoreProduct(a, getProduct('jobber')!);
    expect(jobber.excluded).toBe(false);
    expect(jobber.flags.some((f) => f.kind === 'warn')).toBe(true);
  });
});

describe('Missing-data behavior (spec §79)', () => {
  it('treats unknown feature support as partial credit, never a hard exclusion', () => {
    // ServiceM8 does not declare multi_location (=> unknown), so requiring it
    // must reduce but not zero the score, and must not exclude.
    const a = answers({ industry: 'other', requiredFeatures: ['multi_location'] });
    const m8 = scoreProduct(a, getProduct('servicem8')!);
    expect(m8.excluded).toBe(false);
    expect(m8.score).toBeGreaterThan(0);
  });
});

describe('Determinism & normalization', () => {
  it('keeps every score within 0..100 for all products', () => {
    const a = answers({});
    PRODUCTS.forEach((p) => {
      const r = scoreProduct(a, p);
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(100);
    });
  });

  it('produces a stable, deterministic ranking (tie handling)', () => {
    const a = answers({});
    const first = rankProducts(a, PRODUCTS, { limit: 8 }).map(slugOf);
    const second = rankProducts(a, PRODUCTS, { limit: 8 }).map(slugOf);
    expect(first).toEqual(second);
  });
});

describe('CRITICAL: commercial relationships never affect Fit Score (spec §6, §79)', () => {
  it('produces identical scores when a product\'s affiliate/payout data changes', () => {
    const a = answers({ industry: 'hvac', technicians: '2-5', requiredFeatures: ['scheduling', 'invoicing', 'payments'] });
    const jobber = getProduct('jobber')!;

    const before = scoreProduct(a, jobber);

    // Mutate ONLY the commercial relationship — the strongest possible payout.
    const withPayout = {
      ...jobber,
      commercial: {
        type: 'cpa' as const,
        affiliateLinkSlug: 'jobber-high-payout',
        disclosure: 'Paid placement (hypothetical).',
      },
    };
    const after = scoreProduct(a, withPayout);

    expect(after.score).toBe(before.score);
    expect(after.dimensions.map((d) => d.weightedScore)).toEqual(before.dimensions.map((d) => d.weightedScore));
  });

  it('keeps the entire ranking order unchanged when every commercial relationship is flipped', () => {
    const a = answers({ industry: 'hvac', technicians: '11-25', budget: '1000_2500' });
    const baseline = rankProducts(a, PRODUCTS, { limit: 15 }).map(slugOf);

    const flipped = PRODUCTS.map((p) => ({
      ...p,
      commercial: { type: 'cpa' as const, affiliateLinkSlug: `${p.slug}-paid`, disclosure: 'x' },
    }));
    const afterFlip = rankProducts(a, flipped, { limit: 15 }).map(slugOf);

    expect(afterFlip).toEqual(baseline);
  });
});
