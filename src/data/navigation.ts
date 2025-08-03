export interface NavigationItem {
  label: string;
  href: string;
}

export const mainNavigation: NavigationItem[] = [
  { label: "is she real?", href: "/blog" },
  { label: "projects/work", href: "/projects" },
  { label: "learn", href: "/learn" },
  { label: "testimonials", href: "/testimonials" },
  { label: "faq", href: "/faq" },
];

export const legalNavigation: NavigationItem[] = [
  { label: "terms", href: "/legal" },
  { label: "privacy", href: "/privacy" },
  { label: "contact", href: "/contact" },
];