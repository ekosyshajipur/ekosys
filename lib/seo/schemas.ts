import { SITE_CONFIG, DIVISIONS } from "@/lib/constants";

const logoUrl = `${SITE_CONFIG.url}/images/Logo.webp`;
const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: SITE_CONFIG.address.line1,
  addressLocality: SITE_CONFIG.address.city,
  addressRegion: SITE_CONFIG.address.state,
  postalCode: SITE_CONFIG.address.pin,
  addressCountry: "IN",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: logoUrl,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneClean,
    address: postalAddress,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phoneClean,
      contactType: "customer service",
      email: SITE_CONFIG.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    },
    department: DIVISIONS.map((d) => ({
      "@type": "Organization",
      name: d.brand,
      url: d.link,
      description: d.description,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneClean,
    email: SITE_CONFIG.email,
    image: logoUrl,
    address: postalAddress,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    areaServed: [
      { "@type": "City", name: "Hajipur" },
      { "@type": "AdministrativeArea", name: "Vaishali" },
      { "@type": "City", name: "Patna" },
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function webPageSchema(page: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
    },
    about: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: [
      { "@type": "City", name: "Hajipur" },
      { "@type": "City", name: "Patna" },
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "en-IN",
    author: {
      "@type": "Organization",
      name: article.author.includes("EKOSYS") ? SITE_CONFIG.name : article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: article.url,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
