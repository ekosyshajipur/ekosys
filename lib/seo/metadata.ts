import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
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
  image = "/images/Logo.webp",
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: PageSEOProps): Metadata {
  const normalizedPath = path === "" ? "/" : path;
  const url = `${SITE_CONFIG.url}${normalizedPath === "/" ? "" : normalizedPath}`;
  const isHome = normalizedPath === "/";
  const ogTitle = isHome ? title : `${title} | ${SITE_CONFIG.shortName}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    keywords,
    authors: authors?.map((a) => ({ name: a })),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: isHome ? SITE_CONFIG.url : url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: isHome ? SITE_CONFIG.url : url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type,
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: imageAlt || title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`],
    },
  };
}
