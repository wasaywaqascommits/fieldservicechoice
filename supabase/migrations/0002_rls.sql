-- ============================================================================
-- FieldServiceChoice — Row Level Security (spec §39)
-- Run after 0001_init.sql.
--
-- Principles:
--   * Public (anon) can READ only PUBLISHED public content.
--   * Sensitive tables (leads, consents, deliveries, partner inquiries,
--     newsletter, revenue, vendor terms, attribution, audit) are NOT publicly
--     readable — RLS with no anon policy denies by default.
--   * Writes to sensitive tables happen server-side with the SERVICE ROLE key,
--     which bypasses RLS. Never expose that key to the browser.
--   * Admins (rows in admin_profiles) get full access via is_admin().
-- ============================================================================

create or replace function is_admin()
returns boolean as $$
  select exists (select 1 from admin_profiles where id = auth.uid());
$$ language sql security definer stable;

-- Enable RLS on every table -------------------------------------------------
do $$
declare t text;
begin
  for t in
    select tablename from pg_tables
    where schemaname = 'public'
      and tablename in (
        'admin_profiles','products','product_plans','pricing_snapshots','features',
        'product_features','industries','integrations','product_sources','editorial_reviews',
        'comparison_pages','alternative_pages','best_pages','guide_pages','fit_weights','fit_rules',
        'leads','lead_vendor_consents','lead_vendor_deliveries','vendor_partnerships','affiliate_links',
        'partner_inquiries','newsletter_signups','attribution_events','revenue_events',
        'content_updates','redirects','audit_logs'
      )
  loop
    execute format('alter table %I enable row level security;', t);
  end loop;
end $$;

-- Public read policies for published, non-sensitive content -----------------
create policy products_public_read on products for select using (published);
create policy industries_public_read on industries for select using (published);
create policy comparisons_public_read on comparison_pages for select using (published);
create policy alternatives_public_read on alternative_pages for select using (published);
create policy best_public_read on best_pages for select using (published);
create policy guides_public_read on guide_pages for select using (published);

-- Non-sensitive reference/child tables: public read is acceptable.
create policy features_public_read on features for select using (true);
create policy product_plans_public_read on product_plans for select using (true);
create policy product_features_public_read on product_features for select using (true);
create policy integrations_public_read on integrations for select using (true);
create policy product_sources_public_read on product_sources for select using (true);
create policy redirects_public_read on redirects for select using (active);

-- Admin full access on everything ------------------------------------------
do $$
declare t text;
begin
  for t in
    select tablename from pg_tables
    where schemaname = 'public'
      and tablename in (
        'admin_profiles','products','product_plans','pricing_snapshots','features',
        'product_features','industries','integrations','product_sources','editorial_reviews',
        'comparison_pages','alternative_pages','best_pages','guide_pages','fit_weights','fit_rules',
        'leads','lead_vendor_consents','lead_vendor_deliveries','vendor_partnerships','affiliate_links',
        'partner_inquiries','newsletter_signups','attribution_events','revenue_events',
        'content_updates','redirects','audit_logs'
      )
  loop
    execute format(
      'create policy %I on %I for all to authenticated using (is_admin()) with check (is_admin());',
      t || '_admin_all', t
    );
  end loop;
end $$;

-- NOTE:
--  * No anon INSERT policies exist for leads / partner_inquiries / newsletter.
--    Public form submissions are inserted by the Next.js server using the
--    service-role key (which bypasses RLS), never directly from the browser.
--  * affiliate_links, fit_weights, fit_rules, vendor_partnerships, revenue_events,
--    attribution_events, audit_logs, leads*, partner_inquiries and newsletter
--    have NO public read policy and are therefore private by default.
