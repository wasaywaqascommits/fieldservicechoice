import 'server-only';
import { randomUUID } from 'node:crypto';
import { getServiceClient } from './client';
import type { LeadInput, NewsletterInput, PartnerInput } from '@/lib/validation/schemas';

/**
 * Server-side write operations (spec §78).
 *
 * When Supabase admin credentials are configured, these insert into the
 * corresponding tables. When they are NOT (local development), they fall back
 * to a logged no-op that returns a synthetic id — so the full lead / partner /
 * newsletter flow can be exercised end-to-end without a database, and NO buyer
 * data is silently dropped without a visible dev log.
 */

interface WriteResult {
  id: string;
  persisted: boolean;
}

function devFallback(kind: string, payload: unknown): WriteResult {
  const id = randomUUID();
  // eslint-disable-next-line no-console
  console.info(`[dev-store] ${kind} not persisted (Supabase not configured). id=${id}`, JSON.stringify(payload));
  return { id, persisted: false };
}

export async function createLead(input: LeadInput): Promise<WriteResult> {
  const supabase = getServiceClient();
  if (!supabase) return devFallback('lead', { email: input.email, vendors: input.selectedVendors });

  const { data: lead, error } = await supabase
    .from('leads')
    .insert({
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      business_name: input.businessName || null,
      website: input.website || null,
      state: input.state || null,
      country: input.country || 'US',
      industry: input.answers.industry,
      technician_band: input.answers.technicians,
      business_model: input.answers.businessModel,
      required_features: input.answers.requiredFeatures,
      accounting: input.answers.accounting,
      budget_band: input.answers.budget,
      current_software: input.answers.currentSoftware || null,
      office_employees: input.answers.officeEmployees ?? null,
      timeline: input.answers.timeline || null,
      matched_products: input.matchedProducts,
      selected_vendors: input.selectedVendors,
      source_page: input.sourcePage || null,
      utm_source: input.attribution?.utmSource || null,
      utm_medium: input.attribution?.utmMedium || null,
      utm_campaign: input.attribution?.utmCampaign || null,
      utm_content: input.attribution?.utmContent || null,
      utm_term: input.attribution?.utmTerm || null,
      referrer: input.attribution?.referrer || null,
      session_id: input.attribution?.sessionId || null,
      status: 'new',
    })
    .select('id')
    .single();

  if (error || !lead) throw new Error(`Failed to store lead: ${error?.message ?? 'unknown error'}`);

  // Store per-vendor consent records (spec §13).
  if (input.consents.length > 0) {
    const rows = input.consents.map((c) => ({
      lead_id: lead.id,
      product_slug: c.productSlug,
      consented: c.consented,
      wording_shown: c.wordingShown,
      consented_at: c.timestamp,
      source_url: input.sourcePage || null,
      session_id: input.attribution?.sessionId || null,
    }));
    const { error: consentErr } = await supabase.from('lead_vendor_consents').insert(rows);
    if (consentErr) throw new Error(`Failed to store consent: ${consentErr.message}`);
  }

  return { id: lead.id as string, persisted: true };
}

export async function createPartnerInquiry(input: PartnerInput): Promise<WriteResult> {
  const supabase = getServiceClient();
  if (!supabase) return devFallback('partner_inquiry', { company: input.company, email: input.email });

  const { data, error } = await supabase
    .from('partner_inquiries')
    .insert({
      company: input.company,
      contact_name: input.name,
      title: input.title || null,
      email: input.email,
      website: input.website || null,
      partnership_type: input.partnershipType,
      message: input.message || null,
      status: 'new',
    })
    .select('id')
    .single();

  if (error || !data) throw new Error(`Failed to store partner inquiry: ${error?.message ?? 'unknown error'}`);
  return { id: data.id as string, persisted: true };
}

export async function createNewsletterSignup(input: NewsletterInput): Promise<WriteResult> {
  const supabase = getServiceClient();
  if (!supabase) return devFallback('newsletter', { email: input.email });

  const { data, error } = await supabase
    .from('newsletter_signups')
    .upsert({ email: input.email }, { onConflict: 'email' })
    .select('id')
    .single();

  if (error || !data) throw new Error(`Failed to store signup: ${error?.message ?? 'unknown error'}`);
  return { id: data.id as string, persisted: true };
}

export interface VendorClickRecord {
  productSlug: string;
  affiliateSlug: string | null;
  sourcePage: string | null;
  sourceType: string | null;
  sessionId: string | null;
  campaign: string | null;
}

export async function recordVendorClick(rec: VendorClickRecord): Promise<void> {
  const supabase = getServiceClient();
  if (!supabase) {
    devFallback('vendor_click', rec);
    return;
  }
  await supabase.from('attribution_events').insert({
    event_type: 'vendor_click',
    product_slug: rec.productSlug,
    affiliate_slug: rec.affiliateSlug,
    source_page: rec.sourcePage,
    source_type: rec.sourceType,
    session_id: rec.sessionId,
    campaign: rec.campaign,
  });
}

export interface AnalyticsEventRecord {
  event: string;
  properties?: Record<string, unknown>;
  sessionId?: string;
  path?: string;
}

export async function recordEvent(rec: AnalyticsEventRecord): Promise<void> {
  const supabase = getServiceClient();
  if (!supabase) {
    devFallback('event', rec);
    return;
  }
  await supabase.from('attribution_events').insert({
    event_type: rec.event,
    properties: rec.properties ?? {},
    session_id: rec.sessionId ?? null,
    source_page: rec.path ?? null,
  });
}
