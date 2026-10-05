export type PricingModel = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  fullReview?: string;
  websiteUrl: string;
  affiliateUrl: string;
  logo: string;
  pricingModel: PricingModel;
  startingPrice: string; // e.g. "$0/mo" or "$20/mo"
  inrPrice: string; // e.g. "₹0" or "₹1,650/mo"
  pros: string[];
  cons: string[];
  rating: number; // 1.0 to 5.0
  reviewCount: number;
  featured: boolean; // yes/no
  sponsored: boolean; // yes/no
  category: string; // Category slug or name
  categorySlug: string;
  lastUpdated: string;
  targetAudience: string[];
  dealText?: string;
  promoCode?: string;
  indiaPaymentSupport: string; // e.g., "UPI & Indian Cards Accepted" or "Card only (No UPI)"
  features: string[];
  freeTierDetails: string;
  upvotes?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  toolCount?: number;
  popularFor: string;
  gradient: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  coverImage: string;
  featuredToolSlugs: string[];
  contentHtml?: string;
  keyTakeaways: string[];
}

export interface ToolSubmission {
  name: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  affiliateUrl: string;
  pricingModel: PricingModel;
  startingPrice: string;
  category: string;
  pros: string;
  cons: string;
  contactEmail: string;
  plan: 'free' | 'fast-track' | 'sponsored';
}
