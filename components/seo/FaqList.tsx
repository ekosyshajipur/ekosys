import type { FaqItem } from "@/lib/content/types";

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-navy-200/80 bg-white px-5 py-4 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none font-semibold text-navy-900 font-heading text-sm sm:text-base flex items-start justify-between gap-4">
            <span>{faq.question}</span>
            <span className="text-green-700 group-open:rotate-45 transition-transform text-lg leading-none">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
