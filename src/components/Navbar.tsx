"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { useDarkMode } from "@/context/DarkModeContext";

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();

  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  const getCurrentPagePath = () => {
    if (!pathname) return "";
    return pathname.replace(/^\/(en|vi)/, "") || "";
  };
  const getLanguageSwitchUrl = (targetLocale: string) =>
    `/${targetLocale}${getCurrentPagePath()}`;

  const translations = {
    en: {
      nav: [
        { label: "Tax Articles", href: "blog" },
        { label: "Services", href: "projects" },
        { label: "About", href: "learn" },
        { label: "Testimonials", href: "testimonials" },
        { label: "FAQ", href: "faq" },
      ],
      contact: "Contact Lieu",
      lightMode: "light mode",
      darkMode: "dark mode",
    },
    vi: {
      nav: [
        { label: "Bài viết về thuế", href: "blog" },
        { label: "Dịch vụ", href: "projects" },
        { label: "Giới thiệu", href: "learn" },
        { label: "Đánh giá", href: "testimonials" },
        { label: "Câu hỏi thường gặp", href: "faq" },
      ],
      contact: "Liên hệ Liệu",
      lightMode: "chế độ sáng",
      darkMode: "chế độ tối",
    },
  };

  const t = translations[currentLocale];
  const navItems = t.nav.map((item) => ({
    ...item,
    href: `/${currentLocale}/${item.href}`,
  }));

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="div"
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-md bg-white dark:bg-neutral-900"
          : "bg-white dark:bg-neutral-900"
      }`}
    >
      {({ open, close }) => (
        <>
          <nav
            className={`container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 
            relative flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-3" : "py-6"
            }`}
          >
            {/* Logo */}
            <Link
              href={`/${currentLocale}`}
              className="flex items-center space-x-3"
            >
              <img
                src="/img/lieu-1.jpg"
                alt="Lieu Vo"
                className={`rounded-full transition-all duration-300 ${
                  scrolled ? "w-10 h-10" : "w-12 h-12"
                }`}
              />
              <div className="flex flex-col items-start space-y-1">
                <span
                  className={`font-medium text-black dark:text-white transition-all duration-300 ${
                    scrolled ? "text-xl" : "text-2xl"
                  }`}
                >
                  Lieu Vo
                </span>
                <span
                  className={`text-gray-600 dark:text-gray-300 font-light transition-all duration-300 ${
                    scrolled ? "text-xs hidden sm:inline" : "text-sm"
                  }`}
                >
                  UK Tax Expert & Accountant
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition px-2 py-1 rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-2">
                {/* Language Switcher */}
                <Link
                  href={getLanguageSwitchUrl("en")}
                  className={`px-2 py-1 text-sm rounded ${
                    currentLocale === "en"
                      ? "bg-gray-200 dark:bg-neutral-700 text-black dark:text-white font-medium"
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  EN
                </Link>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <Link
                  href={getLanguageSwitchUrl("vi")}
                  className={`px-2 py-1 text-sm rounded ${
                    currentLocale === "vi"
                      ? "bg-gray-200 dark:bg-neutral-700 text-black dark:text-white font-medium"
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  VI
                </Link>

                {/* Dark Mode */}
                <button
                  onClick={toggleDarkMode}
                  className="px-4 py-2 rounded-full shadow-md transition font-medium
                    bg-gray-400 text-black hover:bg-gray-300 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
                >
                  {isDarkMode ? t.lightMode : t.darkMode}
                </button>

                {/* Contact */}
                <Link
                  href={`/${currentLocale}/contact`}
                  className="px-6 py-2 text-white bg-gray-600 dark:bg-neutral-800 hover:bg-gray-700 dark:hover:bg-neutral-700 rounded-full shadow transition"
                >
                  {t.contact}
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Disclosure.Button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800">
                {open ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Disclosure.Button>
            </div>
          </nav>

          {/* Mobile Panel */}
          <Disclosure.Panel className="lg:hidden bg-white dark:bg-neutral-900 shadow-md">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => close()}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

              <button
                onClick={() => {
                  toggleDarkMode();
                  close();
                }}
                className="w-full px-4 py-2 rounded-full shadow-md font-medium transition
                  bg-gray-400 text-black hover:bg-gray-300 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
              >
                {isDarkMode ? t.lightMode : t.darkMode}
              </button>

              <Link
                href={`/${currentLocale}/contact`}
                onClick={() => close()}
                className="block w-full text-center px-4 py-2 text-white bg-gray-600 dark:bg-neutral-800 rounded-full shadow"
              >
                {t.contact}
              </Link>

              <div className="flex space-x-2">
                <Link
                  href={getLanguageSwitchUrl("en")}
                  onClick={() => close()}
                  className={`px-2 py-1 text-sm rounded ${
                    currentLocale === "en"
                      ? "bg-gray-200 dark:bg-neutral-700"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  EN
                </Link>
                <Link
                  href={getLanguageSwitchUrl("vi")}
                  onClick={() => close()}
                  className={`px-2 py-1 text-sm rounded ${
                    currentLocale === "vi"
                      ? "bg-gray-200 dark:bg-neutral-700"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  VI
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
