import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/blog/data";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Engineering Insights & Technical Guides — EKOSYS CORPORATION",
  description:
    "Authoritative articles, installation guides, cost benchmarks, and engineering analysis across solar energy, modern facades, healthcare technology, and IT systems.",
  path: "/blogs",
});

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="py-12 lg:py-16">
      {/* Header */}
      <section className="bg-[#F4F7F9] text-navy-900 py-20 lg:py-28 relative overflow-hidden border-b border-navy-200">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 font-heading">
              KNOWLEDGE HUB
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-navy-900">
              Engineering Insights & <span className="text-green-700">Industry Perspectives</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-navy-700 leading-relaxed">
              In-depth research, architectural guides, regulatory standards, and technology reviews authored by EKOSYS engineering leads.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Blog Content */}
      <section className="py-20 bg-white">
        <Container>
          {/* Featured Article */}
          {featured && (
            <div className="mb-16 rounded-3xl overflow-hidden border border-gray-100 bg-gray-50/70 p-6 sm:p-10 lg:p-12 shadow-sm">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image
                    src={featured.featuredImage}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-4 left-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured Insight
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="text-green-700 font-bold uppercase">{featured.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readingTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading leading-tight mb-4 hover:text-green-700 transition-colors">
                      <Link href={`/blogs/${featured.slug}`}>
                        {featured.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      By {featured.author.name}
                    </span>
                    <Link
                      href={`/blogs/${featured.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-all"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining Articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-gray-100 bg-white shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-green-700 transition-colors font-heading mb-3 line-clamp-2">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">
                    {post.author.name}
                  </span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xs font-bold text-navy-900 group-hover:text-green-700 transition-colors inline-flex items-center gap-1"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
