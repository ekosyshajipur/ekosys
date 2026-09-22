export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  title: string;
  body: string;
}

export interface BulletGroup {
  title: string;
  items: string[];
}

export interface RelatedLink {
  href: string;
  label: string;
}

export type SearchIntent =
  | "informational"
  | "commercial"
  | "transactional"
  | "local"
  | "navigational";

export interface SeoRecord {
  path: string;
  cluster: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  semanticKeywords: string[];
  searchIntent: SearchIntent;
  audience: string;
  title: string;
  description: string;
  h1: string;
  ogImage: string;
  ogImageAlt: string;
  ctaLabel: string;
  conversionGoal: string;
  relatedPaths: string[];
  insightSlugs: string[];
}

export interface HubContent {
  divisionId: string;
  seo: SeoRecord;
  eyebrow: string;
  intro: string;
  whoFor: string;
  differentiator: string;
  serviceSlugs: string[];
  localNote: string;
  faqs: FaqItem[];
}

export interface ServiceContent {
  divisionId: string;
  slug: string;
  seo: SeoRecord;
  eyebrow: string;
  intro: string;
  whoNeeds: string;
  problems: ContentSection[];
  approach: ContentSection[];
  considerations: BulletGroup[];
  faqs: FaqItem[];
}

export interface LocationContent {
  slug: string;
  seo: SeoRecord;
  eyebrow: string;
  intro: string;
  context: ContentSection[];
  servicesAvailable: RelatedLink[];
  faqs: FaqItem[];
}
