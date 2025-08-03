import { type Metadata } from "next";
import { Hero } from "@/components/Hero";
import { BlogAccordion } from "@/components/BlogAccordion";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

type Props = {
  params: { locale: string };
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Thi Nguyen - Home",
      description: "Thi Nguyen, London-based full-stack SME specialist - automating the boring bits and building solutions that actually work.",
      keywords: ["Thi Nguyen", "Thi Dac Nguyen", "Thi Nguyen London", "automation consultant", "full-stack developer", "SME specialist", "London consultant"]
    },
    vi: {
      title: "Thi Nguyen - Trang chủ",
      description: "Thi Nguyen, chuyên gia SME full-stack tại London - tự động hóa những công việc nhàm chán và xây dựng các giải pháp thực sự hiệu quả.",
      keywords: ["Thi Nguyen", "Thi Dac Nguyen", "Thi Nguyen London", "tư vấn tự động hóa", "nhà phát triển full-stack", "chuyên gia SME", "tư vấn London"]
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}`,
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage({ params }: Props) {
  const locale = params.locale;
  
  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
        <Hero locale={locale} />
      </section>
      <section className="bg-white dark:bg-neutral-900 pb-6">
        <BlogAccordion />
      </section>
      <section>
        <Benefits />
      </section>
      <section className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 py-12 md:py-24">
        <Testimonials />
      </section>
      <Faq />
    </main>
  );
}
