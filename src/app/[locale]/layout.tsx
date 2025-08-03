import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Thi Nguyen - Full-Stack SME Specialist & Automation Consultant",
    template: "%s | Thi Nguyen"
  },
  description: "Thi Nguyen, London-based full-stack SME specialist - automating the boring bits and building solutions that actually work. Marketing automation, business process optimization, and custom development for small to medium enterprises.",
  keywords: ["Thi Nguyen", "Thi Dac Nguyen", "Thi Nguyen consultant", "Thi Nguyen London", "automation consultant", "full-stack developer", "SME specialist", "marketing automation", "business process automation", "Python", "JavaScript", "Next.js", "London consultant"],
  authors: [{ name: "Thi Nguyen", url: "https://thielts.com" }],
  creator: "Thi Nguyen",
  publisher: "Thi Nguyen",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://thielts.com",
    siteName: "Thi Nguyen - Full-stack SME Specialist",
    title: "Thi Nguyen - Full-stack SME Specialist & Automation Consultant",
    description: "Thi Nguyen, London-based full-stack SME specialist - automating the boring bits and building solutions that actually work.",
    images: [
      {
        url: "https://thielts.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thi Nguyen - Full-stack SME Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thi Nguyen - Full-stack SME Specialist & Automation Consultant",
    description: "Thi Nguyen, London-based full-stack SME specialist - automating the boring bits and building solutions that actually work.",
    images: ["https://thielts.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="text-black dark:text-white transition-colors min-h-screen">
      <PersonStructuredData />
      <WebsiteStructuredData />
      <DarkModeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer locale={params.locale} />
      </DarkModeProvider>
    </div>
  );
}