import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/Logo.png",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: PageSEOProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = path === "" || path === "/"
    ? `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`
    : `${title} — ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: authors?.map((a) => ({ name: a })),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type,
      images: [
        {
          url: `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}${image}`],
    },
  };
}
