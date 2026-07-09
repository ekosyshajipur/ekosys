// =============================================================================
// EKOSYS Solar — JSON-LD Structured Data Components
// =============================================================================
// Each component renders a <Helmet> block containing a <script type="application/ld+json">
// with valid JSON-LD structured data following schema.org and Google Rich Results guidelines.
//
// Usage:
//   import { OrganizationSchema, FAQSchema } from "@/components/SchemaMarkup";
//   <OrganizationSchema />
//   <FAQSchema faqs={[{ q: "...", a: "..." }]} />
// =============================================================================

import { Helmet } from "react-helmet-async";
import { businessInfo, serviceAreas, serviceTypes, testimonialsSummary } from "../data/seoData";

// ---------------------------------------------------------------------------
// Helper — renders a JSON-LD <script> tag inside <Helmet>
// Using JSON.stringify guarantees valid JSON (no template-literal pitfalls).
// ---------------------------------------------------------------------------
function JsonLd({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ===========================================================================
// 1. OrganizationSchema
// Combined Organization + LocalBusiness + ElectricalContractor schema.
// Includes address, geo, contact, opening hours, services, ratings, etc.
// ===========================================================================
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: businessInfo.url,
    logo: {
      "@type": "ImageObject",
      url: businessInfo.logo,
      width: 512,
      height: 512,
    },
    image: businessInfo.image,
    description: businessInfo.description,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    foundingDate: businessInfo.foundingDate,
    priceRange: businessInfo.priceRange,

    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country,
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.lat,
      longitude: businessInfo.geo.lng,
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessInfo.phone,
        email: businessInfo.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
    ],

    openingHoursSpecification: [
      {
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
    ],

    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
    })),


    sameAs: [
      businessInfo.social.facebook,
      businessInfo.social.instagram,
      businessInfo.social.youtube,
      businessInfo.social.linkedin,
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Energy Services",
      itemListElement: serviceTypes.map((service) => ({
        "@type": "OfferCatalog",
        name: service.name,
        description: service.description,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: businessInfo.name,
              },
            },
          },
        ],
      })),
    },
    department: [
      {
        '@type': 'Organization',
        name: 'EKOSYS Solar EPC Division',
        description: 'End-to-end solar energy solutions including rooftop, commercial, and industrial solar installations.',
        url: `${businessInfo.url}/home`,
      },
      {
        '@type': 'Organization', 
        name: 'EKOSYS Facade Engineering Division',
        description: 'Premium architectural facade engineering including structural glazing, curtain walls, and ACP cladding.',
        url: `${businessInfo.url}/facade`,
      },
    ],
    knowsAbout: [
      'Solar Energy', 'Photovoltaic Systems', 'Solar EPC', 'Rooftop Solar',
      'Net Metering', 'PM Surya Ghar Yojana', 'Solar Inverters', 'Solar Batteries',
      'Architectural Facade', 'Structural Glazing', 'Curtain Wall Systems',
      'ACP Cladding', 'Glass Facade', 'Aluminium Facade', 'Building Envelope',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: testimonialsSummary.aggregateRating.ratingValue,
      reviewCount: testimonialsSummary.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '50+' },
    slogan: 'Engineering the Future',
  };

  return <JsonLd data={schema} />;
}

// ===========================================================================
// 2. WebSiteSchema
// Enables the Google Sitelinks Search Box for the site.
// ===========================================================================
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}/#website`,
    name: businessInfo.name,
    url: businessInfo.url,
    description: businessInfo.description,
    publisher: {
      "@id": `${businessInfo.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${businessInfo.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={schema} />;
}

// ===========================================================================
// 3. FAQSchema
// Renders an FAQPage schema from an array of { q, a } objects.
// Props: faqs — Array<{ q: string, a: string }>
// ===========================================================================
export function FAQSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

// ===========================================================================
// 4. ProductSchema
// Renders a Product schema for product/equipment pages.
// Props: product — { name, description, image, sku, brand, price,
//                     priceCurrency, availability, ratingValue, reviewCount }
// ===========================================================================
export function ProductSchema({ product }) {
  if (!product) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand || businessInfo.name,
    },
    offers: {
      "@type": "Offer",
      url: product.url || businessInfo.url,
      price: product.price,
      priceCurrency: product.priceCurrency || "INR",
      availability:
        product.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: businessInfo.name,
      },
    },
    ...(product.ratingValue && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.ratingValue,
        reviewCount: product.reviewCount || testimonialsSummary.aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };

  return <JsonLd data={schema} />;
}

// ===========================================================================
// 5. BreadcrumbSchema
// Renders a BreadcrumbList schema from an array of navigation items.
// Props: items — Array<{ name: string, url: string }>
// ===========================================================================
export function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}

// ===========================================================================
// 6. ServiceSchema
// Renders a Service schema for individual service pages.
// Props: service — { name, description, image, url, areaServed? }
// ===========================================================================
export function ServiceSchema({ service }) {
  if (!service) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    image: service.image,
    url: service.url || businessInfo.url,
    provider: {
      "@type": "Organization",
      "@id": `${businessInfo.url}/#organization`,
      name: businessInfo.name,
      url: businessInfo.url,
      logo: businessInfo.logo,
    },
    areaServed: (Array.isArray(service.areaServed) ? service.areaServed : (service.areaServed ? [service.areaServed] : serviceAreas)).map((area) => ({
      "@type": "Place",
      name: typeof area === "string" ? area : area.name,
    })),
    serviceType: service.name,
  };

  return <JsonLd data={schema} />;
}



// ===========================================================================
// 8. ArticleSchemaMeta
// Renders an Article schema for blog posts and article pages.
// Also injects Open Graph and Twitter Card meta tags via Helmet.
// Props: { title, description, image, url, datePublished, dateModified?,
//          author?, section? }
// ===========================================================================
export function ArticleSchemaMeta({
  title,
  description,
  image,
  url,
  datePublished,
  dateModified,
  author,
  section,
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image || businessInfo.image,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || businessInfo.name,
      url: businessInfo.url,
      logo: businessInfo.logo,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
      logo: {
        "@type": "ImageObject",
        url: businessInfo.logo,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(section && { articleSection: section }),
  };

  return (
    <Helmet>
      {/* Page Title & Description */}
      <title>{title} | {businessInfo.name}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || businessInfo.image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="article:published_time" content={datePublished} />
      <meta property="article:modified_time" content={dateModified || datePublished} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || businessInfo.image} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    </Helmet>
  );
}

// ===========================================================================
// WebPageSchema
// Renders a WebPage (or subtype) schema with optional speakable support.
// Props: { type?, name, description, url, speakableCssSelectors? }
// ===========================================================================
export function WebPageSchema({ type = 'WebPage', name, description, url, speakableCssSelectors }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    isPartOf: { '@id': `${businessInfo.url}/#website` },
    about: { '@id': `${businessInfo.url}/#organization` },
    ...(speakableCssSelectors && {
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: speakableCssSelectors,
      },
    }),
  };
  return <JsonLd data={schema} />;
}

// ===========================================================================
// HowToSchema
// Renders a HowTo schema from an array of step objects.
// Props: { name, description, steps: Array<{ name, text, image? }>, totalTime? }
// ===========================================================================
export function HowToSchema({ name, description, steps, totalTime }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
  return <JsonLd data={schema} />;
}

// ===========================================================================
// ItemListSchema
// Renders an ItemList schema for collection/list pages.
// Props: { name, items: Array<{ name, url, position?, image?, description? }> }
// ===========================================================================
export function ItemListSchema({ name, items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: item.position || index + 1,
      name: item.name,
      url: item.url,
      ...(item.image && { image: item.image }),
      ...(item.description && { description: item.description }),
    })),
  };
  return <JsonLd data={schema} />;
}

// ===========================================================================
// VideoObjectSchema
// Renders a VideoObject schema for embedded videos.
// Props: { name, description, thumbnailUrl, uploadDate, contentUrl?, embedUrl?, duration? }
// ===========================================================================
export function VideoObjectSchema({ name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl, duration }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
    publisher: {
      '@type': 'Organization',
      name: businessInfo.name,
      logo: { '@type': 'ImageObject', url: businessInfo.logo },
    },
  };
  return <JsonLd data={schema} />;
}

// ===========================================================================
// AggregateRatingSchema
// Renders an AggregateRating for the organization.
// ===========================================================================
export function AggregateRatingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: testimonialsSummary.aggregateRating.ratingValue,
      reviewCount: testimonialsSummary.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
  return <JsonLd data={schema} />;
}

// ===========================================================================
// ProfessionalServiceSchema
// Renders a ProfessionalService schema for facade/engineering service pages.
// Props: { name, description, url, image?, areaServed? }
// ===========================================================================
export function ProfessionalServiceSchema({ name, description, url, image, areaServed }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    url,
    ...(image && { image }),
    provider: {
      '@type': 'Organization',
      '@id': `${businessInfo.url}/#organization`,
      name: businessInfo.name,
    },
    areaServed: areaServed || [
      { '@type': 'State', name: 'Bihar' },
      { '@type': 'State', name: 'Jharkhand' },
      { '@type': 'Country', name: 'India' },
    ],
  };
  return <JsonLd data={schema} />;
}
