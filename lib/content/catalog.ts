import { solarHub, solarServices } from "./solar";
import { facadeHub, facadeServices } from "./facade";
import { medtechHub, medtechServices } from "./medtech";
import { designlabHub, designlabServices } from "./designlab";
import { itHub, itServices } from "./it";
import { locationPages } from "./locations";
import type { HubContent, LocationContent, SeoRecord, ServiceContent } from "./types";

export const hubs: HubContent[] = [
  solarHub,
  facadeHub,
  medtechHub,
  designlabHub,
  itHub,
];

export const services: ServiceContent[] = [
  ...solarServices,
  ...facadeServices,
  ...medtechServices,
  ...designlabServices,
  ...itServices,
];

const hubByDivision = Object.fromEntries(hubs.map((h) => [h.divisionId, h])) as Record<
  string,
  HubContent
>;

export const DIVISION_PATH: Record<string, string> = {
  solar: "/solar",
  facade: "/facade",
  medtech: "/medtech",
  designlab: "/designlab",
  itsolutions: "/it-solutions",
};

export function getHub(divisionId: string): HubContent | undefined {
  return hubByDivision[divisionId];
}

export function getHubByPrefix(prefix: string): HubContent | undefined {
  const path = `/${prefix}`;
  return hubs.find((h) => h.seo.path === path);
}

export function getServicesForDivision(divisionId: string): ServiceContent[] {
  return services.filter((s) => s.divisionId === divisionId);
}

export function getService(divisionId: string, slug: string): ServiceContent | undefined {
  return services.find((s) => s.divisionId === divisionId && s.slug === slug);
}

export function getLocation(slug: string): LocationContent | undefined {
  return locationPages.find((l) => l.slug === slug);
}

export function getPageTitle(path: string): string {
  const hub = hubs.find((h) => h.seo.path === path);
  if (hub) return hub.seo.h1;
  const service = services.find((s) => s.seo.path === path);
  if (service) return service.seo.h1;
  const loc = locationPages.find((l) => l.seo.path === path);
  if (loc) return loc.seo.h1;
  return path;
}

export function resolveRelated(paths: string[]): { href: string; label: string }[] {
  return paths.map((href) => ({
    href,
    label: getPageTitle(href).replace(/EKOSYS[^.]*$/, "").slice(0, 80) || href,
  }));
}

export function getAllIndexablePaths(): { path: string; seo: SeoRecord }[] {
  const extra: { path: string; seo: SeoRecord }[] = [
    {
      path: "/industries",
      seo: {
        path: "/industries",
        cluster: "industries",
        primaryKeyword: "engineering solutions by industry",
        secondaryKeywords: ["healthcare infrastructure", "industrial solar", "commercial facades"],
        semanticKeywords: ["residential", "commercial", "industrial", "government"],
        searchIntent: "commercial",
        audience: "Buyers identifying EKOSYS by sector",
        title: "Industries We Serve",
        description:
          "EKOSYS works with residential, commercial, industrial, healthcare, education and institutional clients across solar, facades, MedTech, architecture and IT.",
        h1: "Industries EKOSYS Serves",
        ogImage: "/images/facade/project_commercial_2.png",
        ogImageAlt: "Commercial engineering project context",
        ctaLabel: "Discuss Your Sector Project",
        conversionGoal: "Industry-qualified enquiry",
        relatedPaths: ["/solar", "/facade", "/medtech", "/designlab", "/it-solutions"],
        insightSlugs: [],
      },
    },
    {
      path: "/projects",
      seo: {
        path: "/projects",
        cluster: "projects",
        primaryKeyword: "EKOSYS engineering projects",
        secondaryKeywords: ["solar projects Bihar", "facade projects", "architecture projects"],
        semanticKeywords: ["project types", "execution"],
        searchIntent: "informational",
        audience: "Prospects looking for evidence of work types",
        title: "Project Types & Delivery",
        description:
          "See the kinds of solar, facade, MedTech, architecture and IT work EKOSYS is set up to deliver. Named case studies are published only when clients permit.",
        h1: "How EKOSYS Delivers Projects",
        ogImage: "/images/facade/project_hospitality.png",
        ogImageAlt: "Hospitality and commercial facade project type",
        ctaLabel: "Discuss a Similar Project",
        conversionGoal: "Project-shaped enquiry",
        relatedPaths: ["/contact", "/solar/solar-epc", "/facade"],
        insightSlugs: [],
      },
    },
    {
      path: "/locations",
      seo: {
        path: "/locations",
        cluster: "local",
        primaryKeyword: "EKOSYS service locations",
        secondaryKeywords: ["Hajipur office", "Patna services", "Bihar engineering"],
        semanticKeywords: ["NAP", "Vaishali"],
        searchIntent: "local",
        audience: "Users looking for local presence",
        title: "Service Locations in Bihar",
        description:
          "EKOSYS Corporation is based in Hajipur, Vaishali, and delivers solar, facade, MedTech, architecture and IT work across Patna, North Bihar and wider India by engagement.",
        h1: "Where EKOSYS Works",
        ogImage: "/images/facade/about_company.png",
        ogImageAlt: "EKOSYS office and engineering context",
        ctaLabel: "Contact EKOSYS",
        conversionGoal: "Location-aware contact",
        relatedPaths: [
          "/locations/hajipur",
          "/locations/vaishali",
          "/locations/patna",
          "/locations/bihar",
        ],
        insightSlugs: [],
      },
    },
  ];

  return [
    ...hubs.map((h) => ({ path: h.seo.path, seo: h.seo })),
    ...services.map((s) => ({ path: s.seo.path, seo: s.seo })),
    ...locationPages.map((l) => ({ path: l.seo.path, seo: l.seo })),
    ...extra,
  ];
}

export function getSeoByPath(path: string): SeoRecord | undefined {
  return getAllIndexablePaths().find((p) => p.path === path)?.seo;
}

export { locationPages };
