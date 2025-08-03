"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";

  const translations = {
    en: {
      badge: "words from others",
      heading: "what people say about working with me",
      intro: `I've been fortunate to collaborate with a diverse group of inspiring people: 
      entrepreneurs, artists, teachers, and business owners, who placed their trust in me to bring 
      their ideas to life. Each project has been more than just a task; it's been an opportunity 
      to listen, learn, and build something meaningful together. 
      From shaping their workflows and telling their stories, to solving tough problems with 
      clarity and care, these moments have shaped me as much as the work itself. 
      Here's what some of them have shared about their experience working alongside me.`,
      cta: "read more testimonials",
    },
    vi: {
      badge: "lời người khác nói",
      heading: "người ta nói gì khi làm việc với thi",
      intro: `thi đã có cơ hội hợp tác với nhiều người truyền cảm hứng: doanh nhân, nghệ sĩ, giáo viên, 
      chủ doanh nghiệp – những người đã tin tưởng thi để hiện thực hoá ý tưởng của họ. 
      mỗi dự án không chỉ là một công việc; đó là một cơ hội để lắng nghe, học hỏi và cùng nhau xây dựng điều ý nghĩa. 
      từ việc định hình quy trình làm việc, kể câu chuyện của họ, đến giải quyết những vấn đề khó với sự rõ ràng và tận tâm, 
      những khoảnh khắc đó đã định hình chính thi nhiều như công việc đã làm. 
      đây là những gì một vài người đã chia sẻ khi làm việc cùng thi.`,
      cta: "xem thêm",
    },
  };

  const t = translations[currentLocale];

  const testimonials = [
    {
      number: 1,
      text: `"It's been an amazing experience since Thi joined as a volunteer, all the way until now as a trustee!"`,
      name: "Rachel Pepper",
      title: "Director of ARTification UK",
    },
    {
      number: 2,
      text: `"Competent and pleasant to work with!"`,
      name: "Anna Vu",
      title: "Cadmore Auctions",
    },
    {
      number: 3,
      text: `"Absolutely brilliant, very organised, very efficient!"`,
      name: "Jonah Rees",
      title: "Northsfield Camera Club",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Introduction */}
          <div className="lg:pr-8">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-white text-sm px-3 py-1 rounded-full mb-4 shadow-lg shadow-black/10 dark:shadow-black/20 lowercase">
              {t.badge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal tracking-wide text-black dark:text-white mb-6 leading-relaxed lowercase">
              {t.heading}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 dark:font-medium leading-relaxed mb-8 lowercase">
              {t.intro}
            </p>
            <a
              href="/testimonials"
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-sm hover:shadow-lg hover:shadow-black/20 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-black/20 lowercase"
            >
              {t.cta}
            </a>
          </div>

          {/* Right Column - Stepper Testimonials */}
          <div className="lg:pl-8 relative">
            <div className="absolute left-6 top-0 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-8">
              {testimonials.map((test) => (
                <StepCard key={test.number} {...test} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

interface StepCardProps {
  number: number;
  text: string;
  name: string;
  title: string;
}

function StepCard({ number, text, name, title }: StepCardProps) {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  
  const getBlogSlug = (name: string) => {
    const slugMap: { [key: string]: string } = {
      "Rachel Pepper": "rachel-pepper-artification",
      "Anna Vu": "anna-vu-cadmore",
      "Jonah Rees": "jonah-rees-camera-club"
    };
    return slugMap[name] || "";
  };
  
  const blogSlug = getBlogSlug(name);
  
  return (
    <div className="relative flex items-start space-x-6">
      {/* Step Number */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-lg font-semibold text-gray-900 dark:text-gray-100 shadow-md">
        {number}
      </div>

      {/* Testimonial Card */}
      <a
        href={`/${currentLocale}/blog/${blogSlug}`}
        className="flex-1 rounded-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-6 shadow-lg shadow-black/10 dark:shadow-black/30 hover:border-gray-500 dark:hover:border-gray-400 transition cursor-pointer block"
      >
        <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100 mb-4">
          {text}
        </p>
        <div>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {name}
          </div>
          <div className="text-gray-600 dark:text-gray-400">{title}</div>
        </div>
      </a>
    </div>
  );
}
