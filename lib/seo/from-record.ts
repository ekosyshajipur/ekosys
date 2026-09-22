import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import type { SeoRecord } from "@/lib/content/types";

export function metadataFromSeo(seo: SeoRecord): Metadata {
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    image: seo.ogImage,
    keywords: [
      seo.primaryKeyword,
      ...seo.secondaryKeywords,
      ...seo.semanticKeywords.slice(0, 6),
    ],
  });
}
