import { getPostSlugs, getPostBySlug } from "@/lib/post";
import { Container } from "@/components/Container";
import { BlogGrid } from "@/components/blog/BlogGrid";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Thi Nguyen - Blog",
      description: "Thi Nguyen's insights from real conversations and real problems - thoughts on business, automation, and making things work better. Real experiences from a London-based SME specialist and automation consultant.",
      keywords: ["Thi Nguyen blog", "Thi Nguyen insights", "business insights", "automation", "SME consulting", "process improvement", "real conversations"],
      ogTitle: "Thi Nguyen - Blog & Real Insights from Business",
      ogDescription: "Thi Nguyen's insights from real conversations and real problems - thoughts on business, automation, and making things work better."
    },
    vi: {
      title: "Thi Nguyen - Blog",
      description: "Những hiểu biết của Thi Nguyen từ các cuộc trò chuyện thực tế và những vấn đề thực tế - suy nghĩ về kinh doanh, tự động hóa và làm cho mọi thứ hoạt động tốt hơn. Kinh nghiệm thực tế từ chuyên gia SME và tư vấn tự động hóa tại London.",
      keywords: ["Thi Nguyen blog", "Thi Nguyen hiểu biết", "hiểu biết kinh doanh", "tự động hóa", "tư vấn SME", "cải tiến quy trình", "cuộc trò chuyện thực tế"],
      ogTitle: "Thi Nguyen - Blog & Những hiểu biết thực tế",
      ogDescription: "Những hiểu biết của Thi Nguyen từ các cuộc trò chuyện thực tế và những vấn đề thực tế - suy nghĩ về kinh doanh, tự động hóa."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}/blog`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}/blog`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const locale = params.locale;
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug, locale)));

  const content = {
    en: {
      tag: "thoughts & reflections",
      title: "is she real?",
      paragraph1: "it's easy to fake a resume, or even pay someone to make a shiny website (like this one). how do you fake years of reflections, messy growth, and the little emotional chaos left behind when you think way too much about everything?",
      paragraph2: "this is me thinking out loud documented, literally. since you've made it this far, why don't see it for yourself?"
    },
    vi: {
      tag: "suy nghĩ & tâm sự",
      title: "có thật không vậy?",
      paragraph1: "làm giả CV thì dễ, hoặc thuê ai đó làm website đẹp (như cái này). nhưng làm sao giả được những năm tháng suy tư, trưởng thành lộn xộn, và những mảnh vỡ cảm xúc còn sót lại khi bạn suy nghĩ quá nhiều về mọi thứ?",
      paragraph2: "đây là mình nghĩ bừa được ghi lại, đúng nghĩa đen. đã đến tận đây rồi, sao không tự mình xem thử?"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <Container className="pt-8 md:pt-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
          {t.tag}
        </div>
        <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {t.paragraph1}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
          {t.paragraph2}
        </p>
      </div>

      {/* Blog Grid with Filtering */}
      <BlogGrid posts={posts} locale={locale} />
    </Container>
  );
}