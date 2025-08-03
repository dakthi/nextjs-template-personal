import { Container } from "@/components/Container";

interface LearnHeroProps {
  lang?: "en" | "vi";
}

export const LearnHero = ({ lang = "en" }: LearnHeroProps) => {
  const content = {
    en: {
      tag: "things I’ve learned (and can share)",
      title: "Some courses I put together from stuff I’ve figured out along the way",
      description:
        "Mostly things I wish someone had told me earlier. No fluff, no theory for theory’s sake: just practical knowledge from someone who’s been there and made the mistakes already.",
      what: "what you’ll find",
      whatTags: ["short lessons", "real examples", "immediate use"],
      subjects: "subjects covered",
      subjectsTags: ["web development", "finance basics", "business skills"],
      quote:
        '"If you’re here to actually learn something, not just collect certificates, you’re in the right place"',
      bottomNote: "take what’s useful, skip what isn’t",
    },
    vi: {
      tag: "những điều mình đã học (và có thể chia sẻ)",
      title: "Một số khóa học mình tự xây dựng từ những gì mình đã tìm ra",
      description:
        "Hầu hết là những điều mình ước gì có người nói với mình sớm hơn. Không màu mè, không lý thuyết vì lý thuyết: chỉ là kiến thức thực tế từ người đã từng trải và mắc sai lầm.",
      what: "bạn sẽ thấy gì",
      whatTags: ["bài học ngắn", "ví dụ thực tế", "áp dụng ngay"],
      subjects: "các chủ đề",
      subjectsTags: ["phát triển web", "cơ bản tài chính", "kỹ năng kinh doanh"],
      quote:
        '"Nếu bạn ở đây để thực sự học điều gì đó, không chỉ để sưu tầm chứng chỉ, thì bạn đã đến đúng chỗ"',
      bottomNote: "lấy những gì hữu ích, bỏ qua phần không cần",
    },
  };

  const t = content[lang];

  return (
    <Container className="flex flex-wrap items-center py-8 sm:py-12 md:py-16">
      <div className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
            {t.tag}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-4 sm:mb-6 leading-relaxed">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 mb-8 sm:mb-12 px-4">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{t.what}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {t.whatTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>

          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{t.subjects}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {t.subjectsTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center px-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm italic mb-4 sm:mb-6">
            {t.quote}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-xs">{t.bottomNote}</p>
        </div>
      </div>
    </Container>
  );
};
