import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

const fmt = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Aditya Khandelwal",
      url: "https://www.thatmarketingguyy.com/about",
    },
  };

  return (
    <>
      <Header />

      <article>
        <section className="bg-bg-light py-14 md:py-20">
          <div className="w-full max-w-[820px] mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
            <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
              <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-primary transition-colors duration-[250ms]">Blog</Link>
            </div>
            <h1 className="text-[clamp(26px,3.8vw,44px)] font-bold text-text-primary leading-[1.12]">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-[13px] text-text-secondary mt-5">
              <span className="font-semibold text-text-primary">Aditya Khandelwal</span>
              <span aria-hidden="true">·</span>
              <span>{fmt(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div
            className="prose-post w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-10 mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-3">
            <Button href="/contact">Get help with your ads</Button>
            <Button href="/blog" variant="secondary">More breakdowns →</Button>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <Footer />
    </>
  );
}
