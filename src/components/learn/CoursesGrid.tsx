import { useState, type FC } from "react";
import { CourseCard } from "./CourseCard";
import { sessions } from "@/content/courses";

interface CoursesGridProps {
  filterCategory?: string;
  locale?: "en" | "vi";
}

export const CoursesGrid: FC<CoursesGridProps> = ({ filterCategory, locale = "en" }) => {
  const [localFilter, setLocalFilter] = useState<string>("");

  const activeFilter = filterCategory ?? localFilter;

  const filteredSessions = activeFilter
    ? sessions.filter((session) => {
        const category = locale === "vi" ? session.category_vi : session.category_en;
        return category === activeFilter;
      })
    : sessions;

  const categories =
    locale === "vi"
      ? ["Tài chính", "Công nghệ", "Ngôn ngữ", "Phát triển bản thân"]
      : ["Finance", "Technology", "Language", "Personal Development"];

  const content = {
    en: {
      showLabel: "show:",
      everything: "everything",
      whyTeach: "why i teach",
      whyTeachText:
        "teaching forces you to really understand something. if you can't explain it simply, you probably don't know it well enough. these courses are as much for me as they are for you.",
      approach: "learning approach",
      approachText1:
        "skip the fluff, focus on what actually works. every lesson here comes from real experience: the mistakes, the breakthroughs, the \"why didn't anyone tell me this sooner\" moments.",
      approachText2:
        "no buzzwords, no theory for theory's sake. just practical knowledge you can use immediately.",
      structure: "course structure",
      structureText:
        "short lessons, real examples, immediate application. learn something today, use it tomorrow. that's the only way learning sticks.",
      whoFor: "who these are for",
      whoForText:
        "people who want to get better at stuff without wading through hours of unnecessary content. if you're here to learn, not to be entertained, you're in the right place.",
      quote: "\"the best teachers are the ones who show you how to think, not what to think\"",
    },
    vi: {
      showLabel: "hiển thị:",
      everything: "tất cả",
      whyTeach: "tại sao thi dạy",
      whyTeachText:
        "dạy học buộc bạn phải thật sự hiểu một điều gì đó. nếu bạn không thể giải thích đơn giản, có lẽ bạn chưa hiểu đủ rõ. những khóa học này vừa dành cho thi vừa dành cho bạn.",
      approach: "phương pháp học",
      approachText1:
        "bỏ qua những thứ rườm rà, tập trung vào những gì thực sự hiệu quả. mỗi bài học ở đây xuất phát từ kinh nghiệm thực tế: những sai lầm, những đột phá, những khoảnh khắc \"sao không ai nói với mình sớm hơn\".",
      approachText2:
        "không có từ ngữ hoa mỹ, không có lý thuyết vì lý thuyết. chỉ là kiến thức thực tế bạn có thể sử dụng ngay lập tức.",
      structure: "cấu trúc khóa học",
      structureText:
        "bài học ngắn, ví dụ thực tế, áp dụng ngay lập tức. học điều gì đó hôm nay, sử dụng nó ngày mai. đó là cách duy nhất để kiến thức bám lâu.",
      whoFor: "dành cho ai",
      whoForText:
        "những người muốn trở nên giỏi hơn mà không phải lội qua hàng giờ nội dung không cần thiết. nếu bạn ở đây để học, không phải để giải trí, thì bạn đã đến đúng chỗ.",
      quote: "\"những giáo viên tốt nhất là những người chỉ cho bạn cách suy nghĩ, không phải suy nghĩ gì\"",
    },
  };

  const t = content[locale] ?? content.en;

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-4">
      {/* Left Column - Learning Philosophy */}
      <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
        <div className="space-y-4 lg:space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.whyTeach}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.whyTeachText}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.approach}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">{t.approachText1}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.approachText2}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.structure}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.structureText}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.whoFor}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.whoForText}</p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-400 text-xs italic">{t.quote}</p>
          </div>
        </div>
      </div>

      {/* Right Column - Course Cards */}
      <div className="lg:w-2/3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-800 dark:text-gray-200 mb-2 sm:mb-0">{t.showLabel}</span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLocalFilter("")}
              className={`text-xs sm:text-sm px-2 py-1 rounded transition-colors ${
                !activeFilter
                  ? "bg-gray-800 dark:bg-gray-700 text-white"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
              }`}
            >
              {t.everything}
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setLocalFilter(category)}
                className={`text-xs sm:text-sm px-2 py-1 rounded transition-colors ${
                  activeFilter === category
                    ? "bg-gray-800 dark:bg-gray-700 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
                }`}
              >
                {category.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {filteredSessions.map((session) => (
            <CourseCard
              key={session.id}
              title={locale === "vi" ? session.title_vi : session.title_en}
              description={locale === "vi" ? session.description_vi : session.description_en}
              image={session.image}
              duration={session.duration}
              level="Beginner"
              price={session.price}
              category={locale === "vi" ? session.category_vi : session.category_en}
              courseUrl={session.sessionUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
