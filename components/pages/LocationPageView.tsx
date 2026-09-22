import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/pages/CtaBand";
import { SITE_CONFIG } from "@/lib/constants";
import type { LocationContent, SeoRecord } from "@/lib/content/types";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schemas";

export function LocationsIndexView({ seo }: { seo: SeoRecord }) {
  const places = [
    {
      href: "/locations/hajipur",
      title: "Hajipur",
      text: "Headquarters and primary office. Opposite Municipal Office, PIN 844101.",
    },
    {
      href: "/locations/vaishali",
      title: "Vaishali district",
      text: "Town and industrial sites across the district, surveyed from Hajipur.",
    },
    {
      href: "/locations/patna",
      title: "Patna",
      text: "Commercial, hospital and residential projects in the capital region.",
    },
    {
      href: "/locations/bihar",
      title: "Bihar & further",
      text: "Statewide work where mobilisation is agreed. Other Indian sites by contract.",
    },
  ];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: seo.h1,
            description: seo.description,
            url: `${SITE_CONFIG.url}/locations`,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Locations", url: `${SITE_CONFIG.url}/locations` },
          ]),
        ]}
      />
      <section className="bg-[#F4F7F9] py-16 lg:py-24 border-b border-navy-200">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy-900 mt-4">
            {seo.h1}
          </h1>
          <p className="mt-6 text-lg text-navy-700 max-w-3xl leading-relaxed">{seo.description}</p>
        </Container>
      </section>
      <section className="py-16 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6">
            {places.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="p-8 rounded-3xl border border-navy-200 hover:border-green-600 transition-colors"
              >
                <h2 className="text-xl font-bold font-heading text-navy-900">{p.title}</h2>
                <p className="mt-3 text-sm text-gray-600">{p.text}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-3xl bg-[#F4F7F9] border border-navy-200 space-y-3 text-sm">
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold-600 mt-0.5" />
              <span>{SITE_CONFIG.address.full}</span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-green-700" />
              <a href={`tel:${SITE_CONFIG.phoneClean}`}>{SITE_CONFIG.phone}</a>
            </div>
            <div className="flex gap-3">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </div>
            <div className="flex gap-3">
              <Clock className="w-4 h-4" />
              <span>
                {SITE_CONFIG.hours.weekdays}, {SITE_CONFIG.hours.time}
              </span>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Contact EKOSYS"
        description="Use one Hajipur address, phone and email everywhere — website, maps listing and quotations."
        ctaLabel="Open the contact page"
      />
    </>
  );
}

export default function LocationPageView({ location }: { location: LocationContent }) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: location.seo.title, href: location.seo.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: location.seo.h1,
            description: location.seo.description,
            url: `${SITE_CONFIG.url}${location.seo.path}`,
          }),
          breadcrumbSchema(
            crumbs.map((c) => ({
              name: c.name,
              url: c.href === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${c.href}`,
            }))
          ),
          faqSchema(location.faqs),
        ]}
      />
      <section className="bg-[#F4F7F9] py-16 lg:py-24 border-b border-navy-200">
        <Container>
          <Breadcrumbs items={crumbs} />
          <span className="divi-badge mt-2">{location.eyebrow}</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold font-heading text-navy-900">
            {location.seo.h1}
          </h1>
          <p className="mt-6 text-lg text-navy-700 max-w-3xl leading-relaxed">{location.intro}</p>
        </Container>
      </section>
      <section className="py-16 bg-white">
        <Container className="max-w-3xl space-y-10">
          {location.context.map((block) => (
            <article key={block.title}>
              <h2 className="text-2xl font-extrabold font-heading text-navy-900">{block.title}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{block.body}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="py-16 bg-[#F4F7F9] border-y border-navy-200">
        <Container>
          <h2 className="text-2xl font-extrabold font-heading text-navy-900 mb-6">
            Divisions you can engage
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.servicesAvailable.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-full bg-white border border-navy-200 text-sm font-semibold hover:border-green-600"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-extrabold font-heading mb-6">FAQs</h2>
          <FaqList faqs={location.faqs} />
        </Container>
      </section>
      <CtaBand
        title={location.seo.ctaLabel}
        description={`${SITE_CONFIG.address.full} · ${SITE_CONFIG.phone} · ${SITE_CONFIG.email}`}
        ctaLabel="Request a consultation"
      />
    </>
  );
}
