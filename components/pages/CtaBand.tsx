import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface CtaBandProps {
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
}

export default function CtaBand({
  title,
  description,
  ctaLabel,
  href = "/contact",
}: CtaBandProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#F4F7F9] border-t border-navy-200">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
              {title}
            </h2>
            <p className="mt-3 text-navy-100 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-colors"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
