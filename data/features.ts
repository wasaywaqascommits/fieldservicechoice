import type { FeatureCategory, FeatureDefinition, FeatureKey } from '@/types';

/**
 * Master feature taxonomy (spec §37). Order within each category is used for
 * display in feature tables and the Finder "required capabilities" question.
 */
export const FEATURE_DEFINITIONS: FeatureDefinition[] = [
  // Scheduling & Dispatch
  { key: 'scheduling', label: 'Scheduling', category: 'Scheduling & Dispatch', description: 'Calendar, drag-and-drop scheduling and technician assignment.' },
  { key: 'dispatching', label: 'Dispatching', category: 'Scheduling & Dispatch', description: 'Real-time dispatch board and job assignment to field techs.' },
  { key: 'route_optimization', label: 'Route Optimization', category: 'Scheduling & Dispatch', description: 'Optimized routing across multiple stops.' },
  { key: 'gps_tracking', label: 'GPS Tracking', category: 'Scheduling & Dispatch', description: 'Live technician / vehicle location tracking.' },
  { key: 'recurring_jobs', label: 'Recurring Jobs', category: 'Scheduling & Dispatch', description: 'Repeating visits and recurring route service.' },

  // CRM & Sales
  { key: 'crm', label: 'CRM', category: 'CRM & Sales', description: 'Customer records, history and communication log.' },
  { key: 'call_tracking', label: 'Call Tracking', category: 'CRM & Sales', description: 'Inbound call tracking and attribution.' },
  { key: 'marketing_automation', label: 'Marketing Automation', category: 'CRM & Sales', description: 'Automated campaigns, reviews and follow-ups.' },

  // Estimates & Invoicing
  { key: 'estimates', label: 'Estimates & Quotes', category: 'Estimates & Invoicing', description: 'Build, send and track quotes and estimates.' },
  { key: 'invoicing', label: 'Invoicing', category: 'Estimates & Invoicing', description: 'Generate and send invoices.' },
  { key: 'pricebook', label: 'Pricebook', category: 'Estimates & Invoicing', description: 'Flat-rate pricebook and good/better/best options.' },
  { key: 'job_costing', label: 'Job Costing', category: 'Estimates & Invoicing', description: 'Track labor, material and margin per job.' },

  // Payments & Financing
  { key: 'payments', label: 'Online Payments', category: 'Payments & Financing', description: 'Card / ACH payment processing.' },
  { key: 'financing', label: 'Consumer Financing', category: 'Payments & Financing', description: 'Point-of-sale consumer financing options.' },

  // Customer Experience
  { key: 'customer_notifications', label: 'Customer Notifications', category: 'Customer Experience', description: 'Automated appointment reminders and status texts.' },
  { key: 'online_booking', label: 'Online Booking', category: 'Customer Experience', description: 'Self-service booking widget for customers.' },
  { key: 'customer_portal', label: 'Customer Portal', category: 'Customer Experience', description: 'Portal for customers to view jobs, invoices and pay.' },
  { key: 'service_agreements', label: 'Service Agreements', category: 'Customer Experience', description: 'Maintenance / membership agreement management.' },

  // Operations
  { key: 'inventory', label: 'Inventory', category: 'Operations', description: 'Parts and stock tracking.' },
  { key: 'multi_location', label: 'Multi-location', category: 'Operations', description: 'Support for multiple branches / business units.' },

  // Reporting
  { key: 'reporting', label: 'Reporting & Dashboards', category: 'Reporting', description: 'Operational and financial reporting.' },

  // Mobile
  { key: 'mobile_app', label: 'Technician Mobile App', category: 'Mobile', description: 'Native mobile app for field technicians.' },
  { key: 'offline_mode', label: 'Offline Mode', category: 'Mobile', description: 'Works without connectivity in the field.' },

  // Integrations
  { key: 'quickbooks_online', label: 'QuickBooks Online', category: 'Integrations', description: 'Two-way sync with QuickBooks Online.' },
  { key: 'quickbooks_desktop', label: 'QuickBooks Desktop', category: 'Integrations', description: 'Sync with QuickBooks Desktop.' },
  { key: 'xero', label: 'Xero', category: 'Integrations', description: 'Sync with Xero accounting.' },
  { key: 'api', label: 'API / Developer Access', category: 'Integrations', description: 'Public API for custom integrations.' },
];

export const FEATURE_MAP: Record<FeatureKey, FeatureDefinition> = Object.fromEntries(
  FEATURE_DEFINITIONS.map((f) => [f.key, f]),
) as Record<FeatureKey, FeatureDefinition>;

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  'Scheduling & Dispatch',
  'CRM & Sales',
  'Estimates & Invoicing',
  'Payments & Financing',
  'Customer Experience',
  'Operations',
  'Reporting',
  'Mobile',
  'Integrations',
];

export function featureLabel(key: FeatureKey): string {
  return FEATURE_MAP[key]?.label ?? key;
}

export function featuresByCategory(category: FeatureCategory): FeatureDefinition[] {
  return FEATURE_DEFINITIONS.filter((f) => f.category === category);
}

/** Curated subset surfaced first in the Finder "what do you need most" step. */
export const FINDER_FEATURE_CHOICES: FeatureKey[] = [
  'scheduling',
  'dispatching',
  'crm',
  'estimates',
  'invoicing',
  'payments',
  'customer_notifications',
  'online_booking',
  'service_agreements',
  'recurring_jobs',
  'pricebook',
  'inventory',
  'gps_tracking',
  'route_optimization',
  'job_costing',
  'financing',
  'marketing_automation',
  'reporting',
  'multi_location',
];
