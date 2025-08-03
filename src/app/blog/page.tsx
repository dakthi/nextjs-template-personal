import { getPostSlugs, getPostBySlug } from "@/lib/post";
import { Container } from "@/components/Container";
import { BlogGrid } from "@/components/blog/BlogGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights from real conversations and real problems - thoughts on business, automation, and making things work better. Real experiences from an SME specialist and automation consultant.",
  keywords: ["business insights", "automation", "SME consulting", "process improvement", "real conversations"],
  alternates: {
    canonical: "https://thineuyen.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://thineuyen.com/blog",
    title: "Blog - Real Insights from Business Conversations",
    description: "Insights from real conversations and real problems - thoughts on business, automation, and making things work better.",
  },
};

export default async function BlogPage() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  return (
    <Container className="pt-8 md:pt-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
          thoughts & reflections
        </div>
        <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
          is she real?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          it's easy to fake a resume, or even pay someone to make a shiny website (like this one). how do you fake years of reflections, messy growth, and the little emotional chaos left behind when you think way too much about everything?
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
          this is me thinking out loud documented, literally. since you've made it this far, why don't see it for yourself?
        </p>
      </div>

      {/* Blog Grid with Filtering */}
      <BlogGrid posts={posts} />
    </Container>
  );
}