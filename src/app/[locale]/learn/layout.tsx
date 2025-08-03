import type { Metadata } from "next";

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Thi Nguyen - Learn & Courses",
      description: "Thi Nguyen's practical courses and learning resources covering web development, business skills, and automation. Knowledge from real-world experience by a London-based full-stack consultant, no fluff.",
      keywords: ["Thi Nguyen courses", "Thi Nguyen learning", "learning", "courses", "web development", "business skills", "automation", "practical tutorials"],
      ogTitle: "Thi Nguyen - Learn & Practical Courses",
      ogDescription: "Thi Nguyen's practical courses and learning resources covering web development, business skills, and automation."
    },
    vi: {
      title: "Thi Nguyen - Học tập & Khóa học",
      description: "Các khóa học thực tế và tài liệu học tập của Thi Nguyen về phát triển web, kỹ năng kinh doanh và tự động hóa. Kiến thức từ kinh nghiệm thực tế của tư vấn viên full-stack tại London, không rườm rà.",
      keywords: ["Thi Nguyen khóa học", "Thi Nguyen học tập", "học tập", "khóa học", "phát triển web", "kỹ năng kinh doanh", "tự động hóa", "hướng dẫn thực tế"],
      ogTitle: "Thi Nguyen - Học tập & Khóa học thực tế",
      ogDescription: "Các khóa học thực tế và tài liệu học tập của Thi Nguyen về phát triển web, kỹ năng kinh doanh và tự động hóa."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}/learn`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}/learn`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LearnLayout({ children }: Props) {
  return children;
}