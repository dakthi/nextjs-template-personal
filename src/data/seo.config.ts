export const seoConfig = {
  defaultTitle: "Thi Nguyen - Full-stack SME Specialist & Automation Consultant",
  titleTemplate: "%s | Thi Nguyen",
  defaultDescription: "Full-stack SME specialist - automating the boring bits and building solutions that actually work. Marketing automation, business process optimization, and custom development for small to medium enterprises.",
  siteUrl: "https://thielts.com",
  keywords: [
    "Thi Nguyen",
    "Thi Dac Nguyen",
    "Thi Nguyen consultant",
    "Thi Nguyen London",
    "automation consultant",
    "full-stack developer", 
    "SME specialist",
    "marketing automation",
    "business process automation",
    "Python",
    "JavaScript",
    "Next.js",
    "London consultant"
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Thi Nguyen - Full-stack SME Specialist",
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
    images: ["https://thielts.com/og-image.jpg"],
  },
} as const;