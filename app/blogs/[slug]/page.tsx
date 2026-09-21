import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, Share2, User, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/lib/blog/data";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schemas";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | EKOSYS" };
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    image: post.featuredImage,
    type: "article",
    publishedTime: post.publishedDate,
    modifiedTime: post.updatedDate,
    authors: [post.author.name],
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = articleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${SITE_CONFIG.url}/blogs/${post.slug}`,
    image: `${SITE_CONFIG.url}${post.featuredImage}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: post.author.name,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Blogs", url: `${SITE_CONFIG.url}/blogs` },
    { name: post.title, url: `${SITE_CONFIG.url}/blogs/${post.slug}` },
  ]);

  return (
    <article className="py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header Container */}
      <Container className="max-w-4xl">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-navy-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span>•</span>
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

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Author Byline */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-100 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
              EK
            </div>
            <div>
              <div className="text-sm font-bold text-navy-900">{post.author.name}</div>
              <div className="text-xs text-gray-500">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Share2 className="w-4 h-4" />
            <span>Technical Editorial</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-gray-100 mb-12">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          {post.content.split("\n\n").map((block, idx) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading pt-6 pb-2 border-b border-gray-100"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-navy-900 font-heading pt-4">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("- ")) {
              const listItems = block.split("\n").filter((item) => item.startsWith("- "));
              return (
                <ul key={idx} className="space-y-2 my-4">
                  {listItems.map((li, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                      <span>{li.replace("- ", "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2">
            Topics:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Consultation Callout in Article */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading mb-2">
              Plan Your Project with EKOSYS Engineers
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Get direct advice, site assessments, and accurate project proposals.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white font-bold text-xs transition-all flex items-center gap-2"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Insights */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-xl font-bold text-navy-900 font-heading mb-6">
              Related Engineering Insights
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blogs/${rel.slug}`}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white shadow-xs hover:shadow-md transition-all group"
                >
                  <span className="text-[11px] font-bold text-green-700 uppercase tracking-wider block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-navy-900 group-hover:text-green-700 transition-colors font-heading mb-2 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
