"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface FooterProps {
  locale?: string;
}

export function Footer({ locale }: FooterProps) {
  const pathname = usePathname();
  const currentLocale = locale || (pathname?.startsWith("/vi") ? "vi" : "en");
  const navigation = [
    { label_en: "is she real?", label_vi: "cô ấy có thật không?", href: "/blog" },
    { label_en: "projects/work", label_vi: "dự án/công việc", href: "/projects" },
    { label_en: "learn", label_vi: "học", href: "/learn" },
    { label_en: "testimonials", label_vi: "cảm nhận", href: "/testimonials" },
    { label_en: "faq", label_vi: "hỏi đáp", href: "/faq" },
  ];

  const legal = [
    { label_en: "terms", label_vi: "điều khoản", href: "/legal" },
    { label_en: "privacy", label_vi: "bảo mật", href: "/privacy" },
    { label_en: "contact", label_vi: "liên hệ", href: "/contact" },
  ];

  const content = {
    en: {
      tagline: "but it's pronounced Tea.",
      description: "Thi Nguyen offers a wide range of marketing, automation consultancy for small, medium enterprises. Email: dakthi9@gmail.com. She's currently based in London, UK.",
      keepInTouch: "keep in touch (I'd love to)",
      copyright: "Made by Thi Nguyen"
    },
    vi: {
      tagline: "nhưng phát âm là Tea.",
      description: "Thi Nguyen cung cấp dịch vụ tư vấn marketing và tự động hóa cho doanh nghiệp nhỏ và vừa. Email: dakthi9@gmail.com. Hiện cô ấy sống tại London, UK.",
      keepInTouch: "giữ liên lạc (mình rất vui)",
      copyright: "Được tạo bởi Thi Nguyen"
    }
  };

  const t = content[currentLocale as keyof typeof content] || content.en;

  return (
    <div className="w-full bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-gray-700 mt-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Link href={`/${currentLocale}`}>
                <span className="flex items-center space-x-2 text-xl font-light text-black dark:text-white">
                  <span>Thi Nguyen</span>
                </span>
                <span className="flex items-center space-x-2 text-sm font-light text-gray-600 dark:text-gray-300">
                  <span>{t.tagline}</span>
                </span>
              </Link>
            </div>
            <div className="max-w-md text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              {t.description}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`/${currentLocale}${item.href}`}
                  className="w-full px-4 py-2 text-gray-500 dark:text-gray-400 rounded-md hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white transition focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none font-light"
                >
                  {currentLocale === "en" ? item.label_en : item.label_vi}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={`/${currentLocale}${item.href}`}
                  className="w-full px-4 py-2 text-gray-500 dark:text-gray-400 rounded-md hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white transition focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none font-light"
                >
                  {currentLocale === "en" ? item.label_en : item.label_vi}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 rounded-md font-light">
              {t.keepInTouch}
            </div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://www.facebook.com/nganhthi247/" target="_blank" rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/in/dakthi/" target="_blank" rel="noopener">
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400 font-light">
          Copyright © {new Date().getFullYear()}.{" "}
          {t.copyright}
        </div>
      </div>
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
