import { Container } from "@/components/Container";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Thi Nguyen - Projects & Portfolio",
      description: "Thi Nguyen's projects and portfolio - a mix of client work, personal experiments, and solutions to problems encountered along the way. Full-stack development and automation projects from a London-based consultant.",
      keywords: ["Thi Nguyen projects", "Thi Nguyen portfolio", "projects", "portfolio", "full-stack development", "automation projects", "client work", "web development"],
      ogTitle: "Thi Nguyen - Projects & Portfolio",
      ogDescription: "Thi Nguyen's projects - a mix of client work, personal experiments, and solutions to problems encountered along the way."
    },
    vi: {
      title: "Thi Nguyen - Dự án & Portfolio",
      description: "Dự án và portfolio của Thi Nguyen - một hỗn hợp của công việc khách hàng, thử nghiệm cá nhân và giải pháp cho những vấn đề gặp phải trên đường đi. Các dự án phát triển full-stack và tự động hóa từ tư vấn viên tại London.",
      keywords: ["Thi Nguyen dự án", "Thi Nguyen portfolio", "dự án", "portfolio", "phát triển full-stack", "dự án tự động hóa", "công việc khách hàng", "phát triển web"],
      ogTitle: "Thi Nguyen - Dự án & Portfolio",
      ogDescription: "Dự án của Thi Nguyen - một hỗn hợp của công việc khách hàng, thử nghiệm cá nhân và giải pháp cho những vấn đề gặp phải."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}/projects`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}/projects`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProjectsPage({ params }: Props) {
  return (
    <>
      <ProjectsHero locale={params.locale} />
      
      <Container className="mb-20">
        <ProjectsGrid locale={params.locale} />
      </Container>
    </>
  );
}