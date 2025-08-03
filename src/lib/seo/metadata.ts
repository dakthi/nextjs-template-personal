import { Metadata } from "next";
import { seoConfig } from "@/data/seo.config";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  section?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogType = "website",
  publishedTime,
  authors,
  section,
}: GenerateMetadataProps = {}): Metadata {
  const metaTitle = title || seoConfig.defaultTitle;
  const metaDescription = description || seoConfig.defaultDescription;
  const allKeywords = [...seoConfig.keywords, ...keywords];
  const canonicalUrl = canonical ? `${seoConfig.siteUrl}${canonical}` : seoConfig.siteUrl;

  const metadata: Metadata = {
    title: title ? title : { default: seoConfig.defaultTitle, template: seoConfig.titleTemplate },
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: "Thi Nguyen", url: seoConfig.siteUrl }],
    creator: "Thi Nguyen",
    publisher: "Thi Nguyen",
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      locale: seoConfig.openGraph.locale,
      url: canonicalUrl,
      siteName: seoConfig.openGraph.siteName,
      title: metaTitle,
      description: metaDescription,
      images: [...seoConfig.openGraph.images],
    },
    twitter: {
      card: seoConfig.twitter.card,
      title: metaTitle,
      description: metaDescription,
      images: [...seoConfig.twitter.images],
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
  };

  // Add article-specific metadata
  if (ogType === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      authors: authors || ["Thi Nguyen"],
      section: section || "Business",
    };
  }

  return metadata;
}