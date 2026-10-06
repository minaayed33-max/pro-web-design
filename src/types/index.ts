export interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  results?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export interface ColorTheme {
  id: string;
  name: string;
  primary: string; // e.g. '#2563eb' or '#10b981'
  primaryTailwind: string;
  gradientText: string;
  buttonBg: string;
  buttonHover: string;
  badgeBg: string;
  badgeBorder: string;
}

export interface ClientWebsiteData {
  id: string;
  businessName: string;
  businessCategory: string;
  tagline: string;
  subTagline: string;
  heroBadge: string;
  heroImage: string;
  currency: string;
  themeId: string;
  
  aboutTitle: string;
  aboutStory: string;
  aboutVision: string;
  aboutImage: string;
  aboutBullets: string[];

  stats: StatItem[];
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  pricingTiers: PricingTier[];
  testimonials: TestimonialItem[];
  faq: FAQItem[];
  contactInfo: ContactInfo;
}

export type PresetKey = 'marketing' | 'contracting' | 'medical' | 'law' | 'tech' | 'restaurant';
