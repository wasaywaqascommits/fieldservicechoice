-- ============================================================================
-- FieldServiceChoice — initial schema (spec §38)
-- PostgreSQL / Supabase. Run this before 0002_rls.sql.
-- ============================================================================

create extension if not exists pgcrypto;

-- Shared updated_at trigger -------------------------------------------------
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Enums ----------------------------------------------------------------------
do $$ begin
  create type verification_status as enum ('verified','vendor_confirmed','needs_verification','not_disclosed');
exception when duplicate_object then null; end $$;

do $$ begin
  create type feature_support as enum ('available','partial','add_on','plan_dependent','not_available','unknown');
exception when duplicate_object then null; end $$;

do $$ begin
  create type commercial_type as enum ('none','affiliate','referral','cpl','cpa','direct_partner');
exception when duplicate_object then null; end $$;

do $$ begin
  create type partnership_type as enum ('affiliate','referral','cpl','cpa','co_marketing','data_verification','other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type lead_status as enum ('new','validated','sent','accepted','rejected','contacted','demo_scheduled','demo_attended','opportunity','closed_won','closed_lost');
exception when duplicate_object then null; end $$;

do $$ begin
  create type revenue_type as enum ('affiliate','cpl','demo','cpa','closed_won','revenue_share','sponsorship');
exception when duplicate_object then null; end $$;

-- ---------------------------------------------------------------------------
-- Admin
-- ---------------------------------------------------------------------------
create table if not exists admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'editor', -- editor | admin
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Products & catalogue
-- ---------------------------------------------------------------------------
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  vendor_name text,
  tagline text,
  description text,
  website text,
  logo_mark text,
  brand_color text,
  verdict text,
  best_for text[] default '{}',
  not_ideal_for text[] default '{}',
  industries text[] default '{}',
  company_sizes text[] default '{}',
  business_models text[] default '{}',
  pricing_model text default 'unknown',
  pricing_starting_status verification_status default 'needs_verification',
  free_trial boolean,
  implementation text default 'moderate', -- low | moderate | high
  implementation_notes text,
  pros text[] default '{}',
  tradeoffs text[] default '{}',
  alternatives text[] default '{}',
  commercial_type commercial_type not null default 'none',
  affiliate_link_slug text,
  commercial_disclosure text,
  seo_title text,
  seo_description text,
  -- Verification dates (spec §5)
  pricing_verified_at date,
  features_verified_at date,
  integrations_verified_at date,
  contract_terms_verified_at date,
  editorial_reviewed_at date,
  published boolean not null default false,
  created_by uuid references auth.users(id),
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists products_published_idx on products (published);
create trigger products_set_updated_at before update on products
  for each row execute function set_updated_at();

create table if not exists product_plans (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  name text not null,
  monthly_price numeric,
  annual_price numeric,
  currency text default 'USD',
  billing_model text,
  included_users int,
  additional_user_price numeric,
  setup_fee numeric,
  trial_days int,
  contract text,
  is_quote_based boolean default false,
  notes text,
  source_url text,
  verification_status verification_status default 'needs_verification',
  verified_at date,
  created_at timestamptz not null default now()
);
create index if not exists product_plans_product_idx on product_plans (product_id);

-- Historic price snapshots (spec §35)
create table if not exists pricing_snapshots (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  captured_at timestamptz not null default now(),
  snapshot jsonb not null
);
create index if not exists pricing_snapshots_product_idx on pricing_snapshots (product_id);

-- Feature taxonomy & mapping (spec §37)
create table if not exists features (
  key text primary key,
  label text not null,
  category text not null,
  description text
);

create table if not exists product_features (
  product_id uuid not null references products(id) on delete cascade,
  feature_key text not null references features(key) on delete cascade,
  support feature_support not null default 'unknown',
  notes text,
  primary key (product_id, feature_key)
);

create table if not exists industries (
  slug text primary key,
  name text not null,
  short_name text,
  intro text,
  key_requirements text[] default '{}',
  sections jsonb default '[]',
  recommended_products text[] default '{}',
  related_comparisons text[] default '{}',
  published boolean not null default false
);

create table if not exists integrations (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  name text not null,
  category text not null default 'other',
  support feature_support not null default 'unknown'
);
create index if not exists integrations_product_idx on integrations (product_id);

-- Sources & verification (spec §36)
create table if not exists product_sources (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  title text not null,
  url text not null,
  source_type text not null,
  accessed_at date,
  verification_status verification_status default 'needs_verification',
  notes text
);
create index if not exists product_sources_product_idx on product_sources (product_id);

create table if not exists editorial_reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  reviewer uuid references auth.users(id),
  state text not null default 'draft', -- draft|researching|verification_needed|ready|published|needs_update|archived
  notes text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Editorial pages (comparisons / alternatives / best / guides)
-- ---------------------------------------------------------------------------
create table if not exists comparison_pages (
  slug text primary key,
  product_a text not null,
  product_b text not null,
  intro text,
  choose_a text[] default '{}',
  choose_b text[] default '{}',
  choose_neither text[] default '{}',
  sections jsonb default '[]',
  seo_title text,
  seo_description text,
  published boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists alternative_pages (
  slug text primary key,
  intro text,
  reasons text[] default '{}',
  alternatives jsonb default '[]',
  published boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists best_pages (
  slug text primary key,
  h1 text not null,
  intro text,
  methodology_note text,
  entries jsonb default '[]',
  seo_title text,
  seo_description text,
  published boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists guide_pages (
  slug text primary key,
  title text not null,
  intro text,
  sections jsonb default '[]',
  published_at date,
  updated_at date,
  published boolean not null default false
);

-- ---------------------------------------------------------------------------
-- Fit Score configuration (spec §9)
-- ---------------------------------------------------------------------------
create table if not exists fit_weights (
  id text primary key default 'default',
  weights jsonb not null,
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now()
);

create table if not exists fit_rules (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rule_type text not null, -- exclusion | warning | modifier
  config jsonb not null default '{}',
  active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Leads & consent (spec §13, §14)
-- ---------------------------------------------------------------------------
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  business_name text,
  website text,
  state text,
  country text default 'US',
  industry text,
  technician_band text,
  office_employees int,
  business_model text,
  required_features text[] default '{}',
  accounting text,
  budget_band text,
  current_software text,
  timeline text,
  matched_products jsonb default '[]',
  selected_vendors text[] default '{}',
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  referrer text,
  session_id text,
  status lead_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists leads_created_idx on leads (created_at desc);
create index if not exists leads_status_idx on leads (status);
create trigger leads_set_updated_at before update on leads
  for each row execute function set_updated_at();

create table if not exists lead_vendor_consents (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  product_slug text not null,
  consented boolean not null,
  wording_shown text not null,
  consented_at timestamptz not null,
  source_url text,
  session_id text
);
create index if not exists lead_consents_lead_idx on lead_vendor_consents (lead_id);

create table if not exists lead_vendor_deliveries (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  product_slug text not null,
  delivered_at timestamptz not null default now(),
  status text not null default 'sent', -- sent|accepted|rejected
  vendor_reference text,
  notes text
);
create index if not exists lead_deliveries_lead_idx on lead_vendor_deliveries (lead_id);

-- ---------------------------------------------------------------------------
-- Vendors, affiliate links, partners (spec §32, §60)
-- ---------------------------------------------------------------------------
create table if not exists vendor_partnerships (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  program text,
  relationship_type commercial_type not null default 'affiliate',
  tracking_info text,
  contact_name text,
  contact_email text,
  start_date date,
  end_date date,
  terms text,
  lead_qualification_rules text,
  duplicate_window_days int,
  revenue_terms text,
  active boolean not null default true,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger vendor_partnerships_set_updated_at before update on vendor_partnerships
  for each row execute function set_updated_at();

create table if not exists affiliate_links (
  slug text primary key,
  program_name text,
  destination_url text not null,
  campaign text,
  effective_date date,
  expiration_date date,
  active boolean not null default true,
  notes text,
  updated_at timestamptz not null default now()
);

create table if not exists partner_inquiries (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  contact_name text not null,
  title text,
  email text not null,
  website text,
  partnership_type partnership_type not null default 'other',
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
create index if not exists partner_inquiries_created_idx on partner_inquiries (created_at desc);

create table if not exists newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Attribution & revenue (spec §57, §58, §59)
-- ---------------------------------------------------------------------------
create table if not exists attribution_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  product_slug text,
  comparison_slug text,
  industry_slug text,
  affiliate_slug text,
  source_page text,
  source_type text,
  campaign text,
  session_id text,
  properties jsonb default '{}',
  created_at timestamptz not null default now()
);
create index if not exists attribution_events_type_idx on attribution_events (event_type);
create index if not exists attribution_events_created_idx on attribution_events (created_at desc);

create table if not exists revenue_events (
  id uuid primary key default gen_random_uuid(),
  vendor_slug text,
  lead_id uuid references leads(id) on delete set null,
  attribution_event_id uuid references attribution_events(id) on delete set null,
  revenue_type revenue_type not null,
  amount numeric not null default 0,
  currency text not null default 'USD',
  status text not null default 'pending', -- pending|confirmed|paid
  occurred_at timestamptz not null default now(),
  paid_at timestamptz,
  reference text,
  created_at timestamptz not null default now()
);
create index if not exists revenue_events_vendor_idx on revenue_events (vendor_slug);

-- ---------------------------------------------------------------------------
-- Ops: content updates, redirects, audit log (spec §50, §77)
-- ---------------------------------------------------------------------------
create table if not exists content_updates (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null,
  entity_slug text not null,
  change_summary text,
  changed_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists redirects (
  id uuid primary key default gen_random_uuid(),
  from_path text unique not null,
  to_path text not null,
  status_code int not null default 301,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor uuid references auth.users(id),
  action text not null,
  entity_type text,
  entity_id text,
  detail jsonb default '{}',
  created_at timestamptz not null default now()
);
create index if not exists audit_logs_created_idx on audit_logs (created_at desc);

-- Default Fit weights (spec §9)
insert into fit_weights (id, weights)
values ('default', '{
  "trade_workflow":0.20,"feature_coverage":0.20,"company_size":0.15,"budget":0.15,
  "integration":0.10,"implementation":0.08,"business_model":0.05,"contract_support":0.04,"mobile_offline":0.03
}')
on conflict (id) do nothing;
