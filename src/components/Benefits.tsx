"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

// ---- Translations ----
const translations = {
  en: {
    benefitOne: {
      title: "Indefinite passion for teaching and inspiring",
      desc: "With the love and qualification to teach, she made it her lifetime mission to learn and digest difficult things, then proceed to teach them in manageable and enjoyable manners. An educated world is a better world to live in - she believes.",
      bullets: [
        {
          title: "CELTA is not only for teaching English",
          desc: "Qualified as a CELTA teacher in 2021, she applied the teaching principles learnt in pretty much everything. From onboarding and consulting clients to teaching colleagues... Excel and Python/Pandas.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20h9" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4H3v16h9V4z" />
            </svg>
          ),
        },
        {
          title: "Constant learning and updating",
          desc: "Not because she has FOMO (well, maybe a bit), but because she enjoys learning things. Before May 2024, Thi didn't know a line of code. Now, this website was launched full-stack, built upon Next.js, deployed on a VPS with a GitHub workflow. All of which she learnt in a week!",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5v14" />
            </svg>
          ),
        },
        {
          title: `"I believe everyone can learn enjoyably"`,
          desc: "Learning shouldn't be hard, which is only made so by bad learning habits and harmful prejudices. Wherever she goes, she inspires people to learn, to develop, and enjoy the process as they are doing so.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          ),
        },
      ],
    },
    benefitTwo: {
      title: "A duty to be more efficient everyday",
      desc: "The same amount of work doesn't yield the same amount of bartering power as yesterday. To Thi, being more efficient incrementally is a standard, not a nice-to-have.",
      bullets: [
        {
          title: "Accelerated learning",
          desc: "In any teams/industries, she believes asking the right questions are vital. Either leveraging cutting-edge generative AI or the layered knowledge and experience of her senior colleagues, she absorbs like nothing else, with joy!",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          ),
        },
        {
          title: "Optimisation, not 'shiny-object syndrome'",
          desc: "She helps you realise and sweat your assets to yield you maximum outcomes. Whether it is your reputation, knowledge, or innovative ways of working, they will be 100x times more valuable with Thi as a team member.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2s-3 1.343-3 3 1.343 3 3 3zm0 2v12" />
            </svg>
          ),
        },
        {
          title: `"Keep the interesting bits for us humans"`,
          desc: "Despite strong passion in automation, she believes in keeping the vital (and fun) strategic decision-making for people. It's the technology that makes our jobs more mesmerising, not taking them away.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          ),
        },
      ],
    },
    cta: "See my work",
  },
  vi: {
    benefitOne: {
      title: "niềm đam mê vô tận với việc dạy và truyền cảm hứng",
      desc: "với tình yêu và chứng chỉ giảng dạy, thi đã biến nó thành sứ mệnh cả đời để học và tiêu hoá những điều khó, rồi truyền đạt lại một cách dễ hiểu và thú vị. thi tin rằng một thế giới được giáo dục là một thế giới đáng sống hơn.",
      bullets: [
        {
          title: "CELTA không chỉ để dạy tiếng anh",
          desc: "được chứng nhận CELTA năm 2021, thi áp dụng các nguyên tắc giảng dạy vào gần như mọi thứ. từ onboarding và tư vấn khách hàng đến dạy đồng nghiệp... excel và python/pandas.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20h9" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4H3v16h9V4z" />
            </svg>
          ),
        },
        {
          title: "luôn học hỏi và cập nhật",
          desc: "không phải vì sợ bỏ lỡ (cũng có chút), mà vì thi thích học. trước tháng 5/2024, thi chưa biết một dòng code nào. giờ website này được triển khai full-stack với next.js, deploy lên vps bằng github workflow - tất cả học trong một tuần!",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5v14" />
            </svg>
          ),
        },
        {
          title: `"thi tin rằng ai cũng có thể học vui vẻ"`,
          desc: "học không nên khó, mà chỉ bị làm khó bởi thói quen học xấu và định kiến. đi đến đâu thi cũng truyền cảm hứng cho người khác học, phát triển và tận hưởng quá trình đó.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          ),
        },
      ],
    },
    benefitTwo: {
      title: "nhiệm vụ phải hiệu quả hơn mỗi ngày",
      desc: "cùng một khối lượng công việc hôm nay không còn có giá trị trao đổi như hôm qua. với thi, hiệu quả tăng dần là tiêu chuẩn, không phải tuỳ chọn.",
      bullets: [
        {
          title: "học hỏi nhanh chóng",
          desc: "trong bất kỳ đội/ ngành nào, thi tin rằng đặt đúng câu hỏi là chìa khoá. tận dụng generative ai tiên tiến hoặc kinh nghiệm sâu của đồng nghiệp, thi học cực nhanh và đầy hứng thú!",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          ),
        },
        {
          title: "tối ưu hoá, không chạy theo hào nhoáng",
          desc: "thi giúp bạn tận dụng tài sản của mình để mang lại kết quả tối đa. dù đó là uy tín, kiến thức hay cách làm việc sáng tạo, tất cả sẽ giá trị hơn 100 lần với thi trong đội.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2s-3 1.343-3 3 1.343 3 3 3zm0 2v12" />
            </svg>
          ),
        },
        {
          title: `"giữ lại những phần thú vị cho mình"`,
          desc: "dù đam mê tự động hoá, thi tin rằng việc ra quyết định chiến lược quan trọng (và vui) nên để con người đảm nhiệm. công nghệ giúp công việc của ta thú vị hơn, không phải lấy đi nó.",
          icon: (
            <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          ),
        },
      ],
    },
    cta: "xem thi làm gì",
  },
};

// ---- Main Component ----
export const Benefits = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  const t = translations[currentLocale];

  return (
    <>
      <BenefitSection data={t.benefitOne} cta={t.cta} />
      <BenefitSection data={t.benefitTwo} cta={t.cta} />
    </>
  );
};

interface BenefitSectionProps {
  data: {
    title: string;
    desc: string;
    bullets: { title: string; desc: string; icon: React.ReactNode }[];
  };
  cta: string;
}

function BenefitSection({ data, cta }: BenefitSectionProps) {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  
  const getBlogSlug = (title: string) => {
    const slugMap: { [key: string]: string } = {
      "CELTA is not only for teaching English": "celta-teaching-principles",
      "CELTA không chỉ để dạy tiếng anh": "celta-teaching-principles",
      "Constant learning and updating": "constant-learning",
      "luôn học hỏi và cập nhật": "constant-learning",
      "I believe everyone can learn enjoyably": "everyone-can-learn",
      "thi tin rằng ai cũng có thể học vui vẻ": "everyone-can-learn",
      "Accelerated learning": "accelerated-learning",
      "học hỏi nhanh chóng": "accelerated-learning",
      "Optimisation, not 'shiny-object syndrome'": "optimization-not-shiny-objects",
      "tối ưu hoá, không chạy theo hào nhoáng": "optimization-not-shiny-objects",
      "Keep the interesting bits for us humans": "keep-interesting-bits-for-humans",
      "giữ lại những phần thú vị cho mình": "keep-interesting-bits-for-humans"
    };
    return slugMap[title] || "";
  };

  return (
    <section className="w-full pt-6 pb-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal tracking-wide text-black dark:text-white leading-tight">
            {data.title}
          </h2>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{data.desc}</p>
            <a
              href="/projects"
              className="inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 group"
            >
              {cta}
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {data.bullets.map((item, index) => {
              const blogSlug = getBlogSlug(item.title);
              
              return (
                <a
                  key={index}
                  href={`/${currentLocale}/blog/${blogSlug}`}
                  className="group flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-6 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300 hover:scale-105 hover:z-10 hover:ring-1 hover:ring-gray-400 min-w-[280px] snap-center cursor-pointer"
                >
                  <div className="mb-6 flex items-center justify-center">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </a>
              );
            })}
          </div>
          {/* Mobile scroll indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {data.bullets.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {data.bullets.map((item, index) => {
            const blogSlug = getBlogSlug(item.title);
            
            return (
              <a
                key={index}
                href={`/${currentLocale}/blog/${blogSlug}`}
                className="group flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-6 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300 hover:scale-105 hover:z-10 hover:ring-1 hover:ring-gray-400 cursor-pointer"
              >
                <div className="mb-6 flex items-center justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
