-- ============================================================================
-- FieldServiceChoice — seed data (spec §82, §83, §89)
--
-- DATA INTEGRITY: no fabricated pricing, ratings or review counts. Products are
-- inserted with verification dates left NULL (needs verification). The canonical
-- development dataset lives in /data (TypeScript) and drives the current app;
-- this SQL seeds the same shape for DB-backed deployments and future CMS import.
-- Run after 0001_init.sql (and optionally 0002_rls.sql).
-- ============================================================================

-- Feature taxonomy (mirrors data/features.ts) -------------------------------
insert into features (key, label, category, description) values
  ('scheduling','Scheduling','Scheduling & Dispatch','Calendar, drag-and-drop scheduling and technician assignment.'),
  ('dispatching','Dispatching','Scheduling & Dispatch','Real-time dispatch board and job assignment to field techs.'),
  ('route_optimization','Route Optimization','Scheduling & Dispatch','Optimized routing across multiple stops.'),
  ('gps_tracking','GPS Tracking','Scheduling & Dispatch','Live technician / vehicle location tracking.'),
  ('recurring_jobs','Recurring Jobs','Scheduling & Dispatch','Repeating visits and recurring route service.'),
  ('crm','CRM','CRM & Sales','Customer records, history and communication log.'),
  ('call_tracking','Call Tracking','CRM & Sales','Inbound call tracking and attribution.'),
  ('marketing_automation','Marketing Automation','CRM & Sales','Automated campaigns, reviews and follow-ups.'),
  ('estimates','Estimates & Quotes','Estimates & Invoicing','Build, send and track quotes and estimates.'),
  ('invoicing','Invoicing','Estimates & Invoicing','Generate and send invoices.'),
  ('pricebook','Pricebook','Estimates & Invoicing','Flat-rate pricebook and good/better/best options.'),
  ('job_costing','Job Costing','Estimates & Invoicing','Track labor, material and margin per job.'),
  ('payments','Online Payments','Payments & Financing','Card / ACH payment processing.'),
  ('financing','Consumer Financing','Payments & Financing','Point-of-sale consumer financing options.'),
  ('customer_notifications','Customer Notifications','Customer Experience','Automated appointment reminders and status texts.'),
  ('online_booking','Online Booking','Customer Experience','Self-service booking widget for customers.'),
  ('customer_portal','Customer Portal','Customer Experience','Portal for customers to view jobs, invoices and pay.'),
  ('service_agreements','Service Agreements','Customer Experience','Maintenance / membership agreement management.'),
  ('inventory','Inventory','Operations','Parts and stock tracking.'),
  ('multi_location','Multi-location','Operations','Support for multiple branches / business units.'),
  ('reporting','Reporting & Dashboards','Reporting','Operational and financial reporting.'),
  ('mobile_app','Technician Mobile App','Mobile','Native mobile app for field technicians.'),
  ('offline_mode','Offline Mode','Mobile','Works without connectivity in the field.'),
  ('quickbooks_online','QuickBooks Online','Integrations','Two-way sync with QuickBooks Online.'),
  ('quickbooks_desktop','QuickBooks Desktop','Integrations','Sync with QuickBooks Desktop.'),
  ('xero','Xero','Integrations','Sync with Xero accounting.'),
  ('api','API / Developer Access','Integrations','Public API for custom integrations.')
on conflict (key) do nothing;

-- Products (minimal records; facts pending verification) --------------------
insert into products (slug, name, vendor_name, tagline, website, commercial_type, affiliate_link_slug, published) values
  ('jobber','Jobber','Jobber Software','Popular all-in-one field service software for small home-service teams.','https://getjobber.com','affiliate','jobber',true),
  ('housecall-pro','Housecall Pro','Housecall Pro','Home-service platform with strong consumer-facing booking and marketing.','https://housecallpro.com','affiliate','housecall-pro',true),
  ('servicetitan','ServiceTitan','ServiceTitan','Enterprise-grade platform for established HVAC, plumbing and electrical.','https://servicetitan.com','referral','servicetitan',true),
  ('workiz','Workiz','Workiz','Field service software with strong built-in phone and lead tracking.','https://workiz.com','affiliate','workiz',true),
  ('fieldpulse','FieldPulse','FieldPulse','Growing all-in-one platform positioned between SMB and mid-market.','https://fieldpulse.com','affiliate','fieldpulse',true),
  ('service-fusion','Service Fusion','Service Fusion','Established FSM for small-to-mid service companies, QuickBooks-friendly.','https://servicefusion.com','affiliate','service-fusion',true),
  ('fieldedge','FieldEdge','FieldEdge','HVAC/plumbing/electrical FSM with deep QuickBooks Desktop ties.','https://fieldedge.com','referral','fieldedge',true),
  ('kickserv','Kickserv','Kickserv','Straightforward, budget-friendly FSM for small service businesses.','https://kickserv.com','affiliate','kickserv',true),
  ('servicem8','ServiceM8','ServiceM8','Apple-first job management for micro and small trades.','https://servicem8.com','none',null,true),
  ('simpro','Simpro','Simpro','Job and project management for commercial trade and project work.','https://simprogroup.com','referral','simpro',true),
  ('buildops','BuildOps','BuildOps','Modern platform for commercial specialty and mechanical contractors.','https://buildops.com','referral','buildops',true),
  ('commusoft','Commusoft','Commusoft','FSM with strong service-contract and maintenance management.','https://commusoft.com','none',null,true),
  ('zuper','Zuper','Zuper','Flexible, modern FSM with configurable workflows and integrations.','https://zuper.co','none',null,true),
  ('servicetrade','ServiceTrade','ServiceTrade','Commercial service platform for mechanical and fire/life-safety.','https://servicetrade.com','none',null,true),
  ('tradify','Tradify','Tradify','Simple job management for small trade businesses and solo operators.','https://tradifyhq.com','affiliate','tradify',true)
on conflict (slug) do nothing;

-- Affiliate link placeholders (destination = vendor site until a program is signed)
insert into affiliate_links (slug, program_name, destination_url, active, notes)
select p.affiliate_link_slug, p.name || ' referral', p.website, true,
       'Placeholder destination (vendor website). Replace with approved tracking URL.'
from products p
where p.affiliate_link_slug is not null
on conflict (slug) do nothing;
