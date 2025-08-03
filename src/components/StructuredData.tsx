import Script from "next/script";

interface PersonStructuredDataProps {
  lang?: "en" | "vi";
  name?: string;
  jobTitle?: string;
  description?: string;
  url?: string;
  email?: string;
  location?: string;
}

export function PersonStructuredData({
  lang = "en",
  name = "Thi Nguyen",
  jobTitle,
  description,
  url = "https://thielts.com",
  email = "dakthi9@gmail.com",
  location,
}: PersonStructuredDataProps) {
  const jobTitleDefault =
    lang === "en"
      ? "Full-stack SME Specialist & Automation Consultant"
      : "Chuyên gia SME Full-stack & Tư vấn Tự động hóa";
  const descriptionDefault =
    lang === "en"
      ? "Full-stack SME specialist - automating the boring bits and building solutions that actually work"
      : "Chuyên gia SME full-stack - tự động hóa các công việc lặp lại và xây dựng giải pháp hiệu quả";
  const locationDefault = lang === "en" ? "London, UK" : "Luân Đôn, Vương quốc Anh";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: jobTitle || jobTitleDefault,
    description: description || descriptionDefault,
    url,
    email,
    address: {
      "@type": "Place",
      name: location || locationDefault,
    },
    sameAs: [
      "https://www.linkedin.com/in/dakthi/",
      "https://www.facebook.com/nganhthi247/",
    ],
    knowsAbout: [
      "Marketing Automation",
      "Business Process Automation",
      "Full-stack Development",
      "SME Consulting",
      "Python",
      "JavaScript",
      "Next.js",
    ],
  };

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface BlogPostStructuredDataProps {
  lang?: "en" | "vi";
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function BlogPostStructuredData({
  lang = "en",
  title,
  description,
  datePublished,
  dateModified,
  author = "Thi Nguyen",
  url,
}: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://thielts.com",
    },
    publisher: {
      "@type": "Person",
      name: author,
      url: "https://thielts.com",
    },
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Script
      id="blog-post-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  lang?: "en" | "vi";
  name?: string;
  description?: string;
  url?: string;
}

export function WebsiteStructuredData({
  lang = "en",
  name,
  description,
  url = "https://thielts.com",
}: WebsiteStructuredDataProps) {
  const defaultName =
    lang === "en"
      ? "Thi Nguyen - Full-stack SME Specialist"
      : "Thi Nguyen - Chuyên gia SME Full-stack";
  const defaultDescription =
    lang === "en"
      ? "Full-stack SME specialist - automating the boring bits and building solutions that actually work"
      : "Chuyên gia SME full-stack - tự động hóa công việc lặp lại và xây dựng giải pháp thực tiễn";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: name || defaultName,
    description: description || defaultDescription,
    url,
    publisher: {
      "@type": "Person",
      name: "Thi Nguyen",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
