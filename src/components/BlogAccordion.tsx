"use client";

import { Container } from "@/components/Container";
import { usePathname } from "next/navigation";

// ---- Translations ----
const translations = {
  en: {
    introTag: "thoughts & reflections",
    heading: "is she real?",
    paragraph1:
      "a celta-certified teacher, an acca-part-qualified accountant, a social media manager, a marketer who knows how to automate things using python, selenium, pandas and can develop and deploy a full-stack website like the one you're looking at.",
    paragraph2:
      "yes, she is - that's the whole point of this website! dive into my thoughts and see the journey from teacher to builder, the messy growth, and the little emotional chaos left behind when you think way too much about everything.",
    cta: "read all my thoughts",
    latestHeading: "latest reflections",
    posts: [
      {
        title: "teacher-to-builder",
        excerpt:
          "how i went from teaching english to building full-stack applications",
        category: "career",
      },
      {
        title: "my-first-problem-solved",
        excerpt:
          "the moment i realized technology could amplify human potential",
        category: "tech",
      },
      {
        title: "university-to-me",
        excerpt:
          "what formal education taught me vs what i actually needed",
        category: "learning",
      },
      {
        title: "how-to-learn-effortlessly",
        excerpt: "the system i use to master new skills quickly",
        category: "learning",
      },
      {
        title: "dealmaking-101",
        excerpt: "lessons learned from negotiating in different cultures",
        category: "business",
      },
      {
        title: "teacher-to-builder", // same post reused intentionally
        excerpt:
          "applying teaching principles to software development",
        category: "career",
      },
      {
        title: "keep-interesting-bits-for-humans",
        excerpt: "keeping humanity in an automated world",
        category: "tech",
      },
      {
        title: "learning-how-to-learn",
        excerpt: "why documenting your journey matters",
        category: "learning",
      },
    ],
  },
  vi: {
    introTag: "suy nghĩ & góc nhìn",
    heading: "thi có thật không?",
    paragraph1:
      "một giáo viên được chứng nhận celta, một kế toán viên đang hoàn tất acca, một quản lý mạng xã hội, một marketer biết tự động hoá mọi thứ bằng python, selenium, pandas và có thể phát triển, triển khai một website full-stack giống như cái bạn đang xem.",
    paragraph2:
      "có thật chứ – đó chính là mục đích của website này! đọc thử những suy nghĩ của **thi**, xem hành trình từ giáo viên thành người xây dựng, những lần trưởng thành lộn xộn, và cả chút hỗn loạn cảm xúc để lại khi mình nghĩ quá nhiều về mọi thứ.",
    cta: "đọc hết suy nghĩ của thi",
    latestHeading: "những suy nghĩ mới nhất",
    posts: [
      {
        title: "teacher-to-builder",
        excerpt:
          "làm sao **thi** từ việc dạy tiếng anh chuyển sang xây dựng ứng dụng full-stack",
        category: "sự nghiệp",
      },
      {
        title: "my-first-problem-solved",
        excerpt:
          "khoảnh khắc **thi** nhận ra công nghệ có thể khuếch đại tiềm năng con người",
        category: "công nghệ",
      },
      {
        title: "university-to-me",
        excerpt:
          "những gì giáo dục chính quy dạy mình so với điều mình thực sự cần",
        category: "học tập",
      },
      {
        title: "how-to-learn-effortlessly",
        excerpt:
          "hệ thống **thi** dùng để làm chủ kỹ năng mới một cách nhanh chóng",
        category: "học tập",
      },
      {
        title: "dealmaking-101",
        excerpt:
          "bài học **thi** rút ra từ việc đàm phán ở các nền văn hoá khác nhau",
        category: "kinh doanh",
      },
      {
        title: "teacher-to-builder", // reused
        excerpt:
          "cách **thi** áp dụng nguyên tắc giảng dạy vào phát triển phần mềm",
        category: "sự nghiệp",
      },
      {
        title: "keep-interesting-bits-for-humans",
        excerpt:
          "giữ nhân tính trong một thế giới tự động hoá",
        category: "công nghệ",
      },
      {
        title: "learning-how-to-learn",
        excerpt:
          "tại sao **thi** thấy việc ghi lại hành trình là quan trọng",
        category: "học tập",
      },
    ],
  },
};


// ---- Component ----
export const BlogAccordion = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  const t = translations[currentLocale];

  return (
    <div className="w-full mb-16 xl:pt-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Introduction */}
          <div className="lg:pr-8">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-white text-sm px-3 py-1 rounded-full mb-4 shadow-lg shadow-black/10 dark:shadow-black/20">
              {t.introTag}
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal tracking-wide text-black dark:text-white mb-6 leading-relaxed">
              {t.heading}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 dark:font-medium leading-relaxed">
                {t.paragraph1}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 dark:font-medium leading-relaxed">
                {t.paragraph2}
              </p>
            </div>
            <div>
              <a
                href="/blog"
                className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-sm hover:shadow-lg hover:shadow-black/20 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200 dark:font-medium shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                {t.cta}
              </a>
            </div>
          </div>

          {/* Right Column - Scrollable Blog Posts */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold tracking-wide text-black dark:text-white mb-6">
              {t.latestHeading}
            </h3>
            <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
              {t.posts.map((post, index) => (
                <a
                  key={index}
                  href={`/blog/${post.title.replace(/\s+/g, "-")}`}
                  className="block bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-sm p-4 hover:shadow-lg hover:shadow-black/20 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-black/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold tracking-wide text-black dark:text-white text-sm leading-tight">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-white ml-2 flex-shrink-0">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs dark:font-medium leading-relaxed">
                    {post.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
