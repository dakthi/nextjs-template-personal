import Script from 'next/script'

interface PersonStructuredDataProps {
  name?: string
  jobTitle?: string
  description?: string
  url?: string
  email?: string
  location?: string
}

export function PersonStructuredData({
  name = "Thi Nguyen",
  jobTitle = "Full-stack SME Specialist & Automation Consultant",
  description = "Full-stack SME specialist - automating the boring bits and building solutions that actually work",
  url = "https://thielts.com",
  email = "dakthi9@gmail.com",
  location = "London, UK"
}: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "url": url,
    "email": email,
    "address": {
      "@type": "Place",
      "name": location
    },
    "sameAs": [
      "https://www.linkedin.com/in/dakthi/",
      "https://www.facebook.com/nganhthi247/"
    ],
    "knowsAbout": [
      "Marketing Automation",
      "Business Process Automation",
      "Full-stack Development",
      "SME Consulting",
      "Python",
      "JavaScript",
      "Next.js"
    ]
  }

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

interface BlogPostStructuredDataProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  url: string
}

export function BlogPostStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  author = "Thi Nguyen",
  url
}: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://thielts.com"
    },
    "publisher": {
      "@type": "Person",
      "name": author,
      "url": "https://thielts.com"
    },
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <Script
      id="blog-post-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

interface WebsiteStructuredDataProps {
  name?: string
  description?: string
  url?: string
}

export function WebsiteStructuredData({
  name = "Thi Nguyen - Full-stack SME Specialist",
  description = "Full-stack SME specialist - automating the boring bits and building solutions that actually work",
  url = "https://thineuyen.com"
}: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": name,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Person",
      "name": "Thi Nguyen"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}