import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Contact Thi Nguyen - London Consultant",
      description: "Contact Thi Nguyen for automation consulting, full-stack development, and SME solutions. London-based consultant working with businesses globally.",
      keywords: ["contact Thi Nguyen", "Thi Nguyen London", "contact", "automation consultant", "full-stack developer", "London consultant", "SME specialist"],
      ogTitle: "Contact Thi Nguyen - London-based Consultant",
      ogDescription: "Contact Thi Nguyen for automation consulting, full-stack development, and SME solutions."
    },
    vi: {
      title: "Liên hệ Thi Nguyen - Tư vấn viên London",
      description: "Liên hệ với Thi Nguyen để được tư vấn tự động hóa, phát triển full-stack và các giải pháp cho doanh nghiệp vừa và nhỏ. Tư vấn viên tại London làm việc với các doanh nghiệp toàn cầu.",
      keywords: ["liên hệ Thi Nguyen", "Thi Nguyen London", "liên hệ", "tư vấn tự động hóa", "lập trình viên full-stack", "tư vấn London", "chuyên gia SME"],
      ogTitle: "Liên hệ Thi Nguyen - Tư vấn viên London",
      ogDescription: "Liên hệ với Thi Nguyen để được tư vấn tự động hóa, phát triển full-stack và các giải pháp cho doanh nghiệp."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}/contact`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}/contact`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ContactPage({ params }: Props) {
  return <ContactForm locale={params.locale} />;
}