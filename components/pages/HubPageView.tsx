import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/pages/CtaBand";
import { PROCESS_STEPS, SITE_CONFIG } from "@/lib/constants";
import { getSeoByPath, getServicesForDivision, resolveRelated } from "@/lib/content/catalog";
import { blogPosts } from "@/lib/blog/data";
import type { HubContent } from "@/lib/content/types";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schemas";

export default function HubPageView({ hub }: { hub: HubContent }) {
  const children = getServicesForDivision(hub.divisionId);
  const related = resolveRelated(hub.seo.relatedPaths);
  const insights = blogPosts.filter((p) => hub.seo.insightSlugs.includes(p.slug));

  const crumbs = [
    { name: "Home", href: "/" },
    { name: hub.seo.title, href: hub.seo.path },
  ];

  const jsonLd = [
    webPageSchema({
      name: hub.seo.h1,
      description: hub.seo.description,
      url: `${SITE_CONFIG.url}${hub.seo.path}`,
    }),
    serviceSchema(hub.seo.primaryKeyword, hub.seo.description, `${SITE_CONFIG.url}${hub.seo.path}`),
    breadcrumbSchema(
      crumbs.map((c) => ({
        name: c.name,
        url: c.href === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${c.href}`,
      }))
    ),
    faqSchema(hub.faqs),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden bg-[#F4F7F9] text-navy-900 py-16 lg:py-24 border-b border-navy-200">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <Container className="relative">
          <Breadcrumbs items={crumbs} />
          <span className="divi-badge text-green-700 border-green-500/25 bg-green-50 mb-4">
            {hub.eyebrow}
          </span>
          <div className="grid lg:grid-cols-12 gap-10 items-center mt-4">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                {hub.seo.h1}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-navy-700 leading-relaxed">{hub.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy-900 text-white text-sm font-bold hover:bg-navy-800"
                >
                  {hub.seo.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations/hajipur"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-navy-900 text-navy-900 text-sm font-semibold hover:bg-navy-900 hover:text-white"
                >
                  Hajipur office
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-navy-200 shadow-lg">
                <Image
                  src={hub.seo.ogImage}
                  alt={hub.seo.ogImageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900">
                Who this division is for
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{hub.whoFor}</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900">
                How EKOSYS works
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{hub.differentiator}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-[#F4F7F9] border-y border-navy-200">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-10">
            Services in this division
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {children.map((child) => (
              <Link
                key={child.slug}
                href={child.seo.path}
                className="divi-card p-6 hover:border-green-600/40 transition-colors group"
              >
                <h3 className="font-bold text-navy-900 font-heading group-hover:text-green-700">
                  {child.seo.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{child.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-green-700">
                  Open page <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-4">
            Execution framework
          </h2>
          <p className="text-gray-600 max-w-3xl mb-10">
            Discover → Design → Engineer → Execute → Support. Each step is scoped in the contract so
            survey, drawings, procurement, site work and aftercare are not implied extras.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="p-5 rounded-2xl border border-navy-200 bg-white">
                <div className="text-xs font-bold text-green-700">{step.number}</div>
                <h3 className="mt-2 font-bold text-navy-900 font-heading">{step.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F7F9] border-y border-navy-200">
        <Container>
          <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-4">
            Bihar and North India context
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">{hub.localNote}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Hajipur", "Vaishali", "Patna", "North Bihar", "India"].map((place) => (
              <li
                key={place}
                className="px-3 py-1.5 rounded-full bg-white border border-navy-200 text-xs font-semibold text-navy-800"
              >
                {place}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {insights.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <Container>
            <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-8">
              Related insights
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {insights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-gray-200"
                >
                  <div className="text-[11px] font-bold uppercase text-green-700">{post.category}</div>
                  <h3 className="mt-2 font-bold text-navy-900 font-heading text-sm">{post.title}</h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 lg:py-20 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-6">
            Questions we are asked
          </h2>
          <FaqList faqs={hub.faqs} />
          {related.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                Continue
              </h3>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-sm font-semibold text-green-700 hover:underline">
                      {getSeoByPath(r.href)?.title || r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      <CtaBand
        title={hub.seo.ctaLabel}
        description="Share the site location, building type and what you already know. We will tell you what a survey needs to decide next."
        ctaLabel={hub.seo.ctaLabel}
      />
    </>
  );
}
