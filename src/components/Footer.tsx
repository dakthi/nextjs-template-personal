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
    { label_en: "Tax Articles", label_vi: "Bài viết về thuế", href: "/blog" },
    { label_en: "Services", label_vi: "Dịch vụ", href: "/projects" },
    { label_en: "About", label_vi: "Giới thiệu", href: "/learn" },
    { label_en: "Testimonials", label_vi: "Đánh giá", href: "/testimonials" },
    { label_en: "FAQ", label_vi: "Câu hỏi thường gặp", href: "/faq" },
  ];

  const legal = [
    { label_en: "Terms", label_vi: "Điều khoản", href: "/legal" },
    { label_en: "Privacy", label_vi: "Bảo mật", href: "/privacy" },
    { label_en: "Contact", label_vi: "Liên hệ", href: "/contact" },
  ];

  const content = {
    en: {
      tagline: "UK Tax Expert & Accountant",
      description: "Lieu Vo is a qualified accountant based in London, UK. She shares tax knowledge and helps people understand practical tax applications for self-employed and limited companies.",
      keepInTouch: "Connect with Lieu",
      copyright: "Made by Lieu Vo"
    },
    vi: {
      tagline: "Chuyên gia thuế & Kế toán UK",
      description: "Lieu Vo là kế toán viên có trình độ tại London, UK. Cô chia sẻ kiến thức về thuế và giúp mọi người hiểu về ứng dụng thuế thực tế cho tự kinh doanh và công ty hữu hạn.",
      keepInTouch: "Kết nối với Liệu",
      copyright: "Được tạo bởi Lieu Vo"
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
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src="/img/lieu-1.jpg"
                    alt="Lieu Vo"
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-xl font-medium text-black dark:text-white">
                    Lieu Vo
                  </span>
                </div>
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
              <a href="https://www.facebook.com/lieuvo.uk" target="_blank" rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/in/lieu-vo-uk" target="_blank" rel="noopener">
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
