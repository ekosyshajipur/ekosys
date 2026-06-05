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
    areaServed: (service.areaServed || serviceAreas).map((area) => ({
      "@type": "City",
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
