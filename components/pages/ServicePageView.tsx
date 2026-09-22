import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/pages/CtaBand";
import { SITE_CONFIG } from "@/lib/constants";
import { getHub, getSeoByPath } from "@/lib/content/catalog";
import { blogPosts } from "@/lib/blog/data";
import type { ServiceContent } from "@/lib/content/types";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schemas";

export default function ServicePageView({ service }: { service: ServiceContent }) {
  const hub = getHub(service.divisionId);
  const insights = blogPosts.filter((p) => service.seo.insightSlugs.includes(p.slug));

  const crumbs = [
    { name: "Home", href: "/" },
    ...(hub ? [{ name: hub.seo.title, href: hub.seo.path }] : []),
    { name: service.seo.title, href: service.seo.path },
  ];

  const jsonLd = [
    webPageSchema({
      name: service.seo.h1,
      description: service.seo.description,
      url: `${SITE_CONFIG.url}${service.seo.path}`,
    }),
    serviceSchema(
      service.seo.primaryKeyword,
      service.seo.description,
      `${SITE_CONFIG.url}${service.seo.path}`
    ),
    breadcrumbSchema(
      crumbs.map((c) => ({
        name: c.name,
        url: c.href === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${c.href}`,
      }))
    ),
    ...(service.faqs.length ? [faqSchema(service.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden bg-[#F4F7F9] py-16 lg:py-22 border-b border-navy-200">
        <Container>
          <Breadcrumbs items={crumbs} />
          <span className="divi-badge mb-4">{service.eyebrow}</span>
          <div className="grid lg:grid-cols-12 gap-10 items-start mt-4">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-navy-900">
                {service.seo.h1}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-navy-700 leading-relaxed">
                {service.intro}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-green-700 text-white text-sm font-bold hover:bg-green-600"
              >
                {service.seo.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-navy-200 shadow-lg">
                <Image
                  src={service.seo.ogImage}
                  alt={service.seo.ogImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900">
            Who needs this service
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{service.whoNeeds}</p>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F7F9] border-y border-navy-200">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-8">
            Problems we design around
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.problems.map((item) => (
              <article key={item.title} className="p-6 rounded-2xl bg-white border border-navy-200">
                <h3 className="font-bold text-navy-900 font-heading">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-8">
            How EKOSYS approaches the work
          </h2>
          <div className="space-y-6 max-w-4xl">
            {service.approach.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 font-heading">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F7F9] border-y border-navy-200">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-8">
            Design, engineering and delivery notes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.considerations.map((group) => (
              <div key={group.title} className="p-6 rounded-2xl bg-white border border-navy-200">
                <h3 className="font-bold text-navy-900 font-heading mb-3">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-green-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {service.seo.relatedPaths.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-6">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.seo.relatedPaths.map((path) => (
                <Link
                  key={path}
                  href={path}
                  className="px-4 py-2 rounded-full border border-navy-200 text-sm font-semibold text-navy-800 hover:border-green-600 hover:text-green-700"
                >
                  {getSeoByPath(path)?.title || path}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {insights.length > 0 && (
        <section className="py-16 bg-white border-t border-navy-200">
          <Container>
            <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-6">
              Guides that sit in this topic
            </h2>
            <ul className="space-y-3">
              {insights.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blogs/${post.slug}`} className="text-sm font-semibold text-green-700 hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {service.faqs.length > 0 && (
        <section className="py-16 bg-[#F4F7F9] border-t border-navy-200">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-6">FAQs</h2>
            <FaqList faqs={service.faqs} />
          </Container>
        </section>
      )}

      <CtaBand
        title={service.seo.ctaLabel}
        description="Tell us the location (Hajipur, Patna, elsewhere in Bihar or India), the building or facility type, and any drawings you already have."
        ctaLabel={service.seo.ctaLabel}
      />
    </>
  );
}
