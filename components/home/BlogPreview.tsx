import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/blog/data";

export default function BlogPreview() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-gray-50/70 relative border-b border-gray-100" id="insights">
      <Container>
        <SectionHeading
          tag="ENGINEERING INTELLIGENCE"
          title="Latest Insights & Industry Perspectives"
          description="Technical deep dives, regulatory updates, and strategic guides written by the EKOSYS engineering teams."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual */}
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

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
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

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">
                  By {post.author.name}
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

        <div className="mt-14 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-navy-900 rounded-xl text-sm font-semibold transition-all shadow-xs"
          >
            <span>Explore All Insights & Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
