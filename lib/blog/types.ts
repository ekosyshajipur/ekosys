export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  publishedDate: string;
  updatedDate: string;
  readingTime: number;
  faqs?: FAQ[];
  relatedSlugs?: string[];
}

export interface Author {
  name: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type BlogCategory =
  | "Solar Energy"
  | "Facade Engineering"
  | "Healthcare Technology"
  | "Architecture & Design"
  | "IT Solutions"
  | "Industry Insights"
  | "Guides"
  | "Company Updates";
