interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      }`}
    >
      {tag && (
        <span className="divi-badge mb-3">
          {tag}
        </span>
      )}
      <HeadingTag
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-navy-200" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`divi-divider mt-6 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
