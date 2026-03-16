/**
 * SEO Configuration for UniDesk
 * Comprehensive metadata for all routes optimized for Google ranking
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
}

// Define SEO metadata for each route - Optimized for Google Ranking
export const seoConfig: Record<string, SEOConfig> = {
  '/': {
    title: 'UniDesk - All-in-One CRM & WhatsApp Business Platform | 2,500+ Businesses Trust Us',
    description: 'UniDesk: The leading all-in-one CRM & WhatsApp Business API platform for Indian businesses. Manage leads, automate customer conversations, close more deals. Free 14-day trial. 2,500+ active businesses. 5M+ messages sent. 98% open rate.',
    keywords: 'CRM software India, WhatsApp business API, lead management software, sales automation, customer relationship management, WhatsApp marketing, business automation India, lead tracking, sales pipeline, WhatsApp automation, customer communication platform',
  },
  '/unicrm': {
    title: 'UniCRM - Smart CRM Platform for Sales Teams | Lead Management & Pipeline',
    description: 'UniCRM: Intelligent CRM platform for managing leads, tracking sales pipelines, and automating follow-ups. Get 14-day free trial. Features: lead scoring, email integration, sales forecasting, call tracking, and advanced analytics.',
    keywords: 'CRM software, lead management, sales pipeline, lead tracking, sales CRM, customer management, email automation, sales forecasting, Kanban board, CRM for small business',
  },
  '/unichat': {
    title: 'UniChat - WhatsApp Business API & Instagram DM Platform | Broadcast & Automation',
    description: 'UniChat: Official WhatsApp Business API & Instagram DM management platform. Send broadcasts to thousands, automate customer conversations, manage team inbox. Free trial. India pricing: ₹0.80-₹1.00 per message.',
    keywords: 'WhatsApp business API, Instagram DM management, WhatsApp automation, WhatsApp marketing, broadcast messages, chatbot, customer engagement, WhatsApp marketing platform, message automation India',
  },
  '/pricing': {
    title: 'UniDesk Pricing - Plans for All Businesses | Transparent, Affordable, No Setup Fees',
    description: 'UniDesk pricing: Starter (₹499/mo), Growth (₹1,499/mo), Enterprise (Custom). All plans include free 14-day trial. No hidden fees. Meta API billing separate (₹0.30-₹1.00 per message).',
    keywords: 'CRM pricing, WhatsApp API pricing, business automation cost, sales software pricing, affordable CRM, pricing plans, subscription models',
  },
  '/features': {
    title: 'UniDesk Features - Lead Capture, Automation, Analytics, WhatsApp Integration',
    description: 'UniDesk features: Lead capture from WhatsApp & web, sales pipeline management, WhatsApp automation, broadcast campaigns, shared team inbox, analytics & reporting, Instagram DM integration.',
    keywords: 'CRM features, lead management, sales automation, WhatsApp integration, team collaboration, analytics, reporting, customer communication, business features',
  },
  '/products': {
    title: 'UniDesk Products - UniCRM, UniChat, UniCOM, UniAds, UniWeb, UniPOS',
    description: 'UniDesk product suite: UniCRM (lead management), UniChat (WhatsApp automation), UniCOM (team communication), UniAds (ad management), UniWeb (website builder), UniPOS (retail POS system).',
    keywords: 'business software, CRM, WhatsApp API, communication platform, ad management, website builder, POS system, business automation tools',
  },
  '/contact': {
    title: 'Contact UniDesk - Support, Demo, & Business Inquiries',
    description: 'Get in touch with UniDesk. Support: support@unidesk.in, WhatsApp: +91 7428251864. Available Mon-Sat, 9 AM - 7 PM IST. Book a free demo today.',
    keywords: 'contact us, customer support, sales inquiry, demo request, business inquiry, contact information',
  },
  '/book-demo': {
    title: 'Book a Free UniDesk Demo - See the Platform in Action',
    description: 'Schedule a personalized demo of UniDesk. Learn how to manage leads, automate WhatsApp conversations, and grow your business. Free 15-minute walkthrough.',
    keywords: 'demo request, product demo, trial, free consultation, walkthrough',
  },
  '/login': {
    title: 'UniDesk Login - Access Your Dashboard',
    description: 'Log in to your UniDesk account. Manage your CRM, WhatsApp campaigns, and analytics. Secure login.',
    keywords: 'login, sign in, dashboard access',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - UniDesk',
    description: 'UniDesk Privacy Policy. How we collect, use, and protect your data. GDPR & data security compliant.',
    keywords: 'privacy policy, data protection, GDPR',
  },
  '/terms': {
    title: 'Terms of Service - UniDesk',
    description: 'UniDesk Terms of Service. Rights, responsibilities, and legal terms for using our platform.',
    keywords: 'terms of service, legal terms, user agreement',
  },
  '/unicom': {
    title: 'UniCOM - Business Intercom & Team Communication Platform',
    description: 'UniCOM: Unified business intercom and team communication. Video calls, team chat, call recording, and integration with your CRM.',
    keywords: 'business communication, team chat, video calling, intercom, communication platform',
  },
  '/uniads': {
    title: 'UniAds - AI-Powered Multi-Platform Ad Management System',
    description: 'UniAds: Unified ad management platform for Facebook, Instagram, Google Ads, and more. AI optimization, campaign automation, multi-account management.',
    keywords: 'ad management, Facebook ads, Google ads, Instagram ads, PPC management, ad automation, AI advertising',
  },
  '/uniweb': {
    title: 'UniWeb - AI Website Builder for Businesses | No-Code, Responsive, Fast',
    description: 'UniWeb: AI-powered website builder. Create professional websites without coding. Responsive design, SEO-optimized, fast loading, e-commerce ready.',
    keywords: 'website builder, AI website, no-code builder, responsive design, e-commerce website, landing page builder',
  },
  '/unipos': {
    title: 'UniPOS - AI-Powered Retail POS System | Billing, Inventory, Analytics',
    description: 'UniPOS: Intelligent retail POS system for small to medium stores. Smart billing, inventory management, AI-powered recommendations, offline mode, customer analytics.',
    keywords: 'POS system, retail POS, billing software, inventory management, store management, retail software',
  },
};

// Helper function to get SEO config for a route
export function getSEOConfig(pathname: string): SEOConfig {
  return seoConfig[pathname] || seoConfig['/'] || {
    title: 'UniDesk - All-in-One CRM & WhatsApp Business Platform',
    description: 'UniDesk: Unified CRM & WhatsApp platform for managing leads, automating sales conversations, and growing your business. Free 14-day trial.',
    keywords: 'CRM software, WhatsApp business API, lead management, sales automation, customer relationship management',
  };
}
