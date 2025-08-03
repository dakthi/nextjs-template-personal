import { Container } from "@/components/Container";
import { Faq } from "@/components/Faq";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Thi Nguyen - FAQ & Questions",
      description: "Frequently asked questions about Thi Nguyen's services, process, and approach to projects. Common questions about automation consulting and full-stack development from a London-based specialist.",
      keywords: ["Thi Nguyen FAQ", "Thi Nguyen questions", "FAQ", "frequently asked questions", "automation consulting", "services", "process"],
      ogTitle: "Thi Nguyen - FAQ & Frequently Asked Questions",
      ogDescription: "Frequently asked questions about Thi Nguyen's services, process, and approach to projects."
    },
    vi: {
      title: "Thi Nguyen - FAQ & Câu hỏi thường gặp",
      description: "Các câu hỏi thường gặp về dịch vụ, quy trình và cách tiếp cận dự án của Thi Nguyen. Câu hỏi phổ biến về tư vấn tự động hóa và phát triển full-stack từ chuyên gia tại London.",
      keywords: ["Thi Nguyen FAQ", "Thi Nguyen câu hỏi", "FAQ", "câu hỏi thường gặp", "tư vấn tự động hóa", "dịch vụ", "quy trình"],
      ogTitle: "Thi Nguyen - FAQ & Câu hỏi thường gặp",
      ogDescription: "Các câu hỏi thường gặp về dịch vụ, quy trình và cách tiếp cận dự án của Thi Nguyen."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}/faq`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}/faq`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function FaqPage({ params }: Props) {
  const locale = params.locale;
  
  const content = {
    en: {
      stillHaveQuestions: "still have questions?",
      stillHaveQuestionsDesc: "every project is unique, so these might not cover everything you're wondering about.",
      quickResponse: "quick response",
      quickResponseDesc: "i usually reply within a few hours, often faster. no pressure, no sales pitch: just honest answers.",
      quote: "there are no stupid questions, only stupid answers",
      askMeDirectly: "ask me directly",
      askMeDirectlyDesc: "the fastest way to get answers tailored to your specific situation.",
      sendMessage: "send a message",
      seeExamples: "see examples",
      seeExamplesDesc: "sometimes it's easier to understand through concrete examples of past work.",
      browseProjects: "browse projects",
      readTestimonials: "read testimonials",
      readTestimonialsDesc: "hear what other clients say about the experience of working together.",
      clientFeedback: "client feedback",
      exploreLearning: "explore learning",
      exploreLearningDesc: "if you're curious about doing some of this yourself, check out what i teach.",
      learningResources: "learning resources"
    },
    vi: {
      stillHaveQuestions: "vẫn còn thắc mắc?",
      stillHaveQuestionsDesc: "mỗi dự án đều độc đáo, nên những câu hỏi này có thể chưa bao gồm tất cả những gì bạn đang tò mò.",
      quickResponse: "phản hồi nhanh",
      quickResponseDesc: "mình thường trả lời trong vài giờ, thường nhanh hơn. không áp lực, không chào hàng: chỉ là những câu trả lời thành thật.",
      quote: "không có câu hỏi ngu ngốc, chỉ có câu trả lời ngu ngốc",
      askMeDirectly: "hỏi trực tiếp mình",
      askMeDirectlyDesc: "cách nhanh nhất để có câu trả lời phù hợp với tình huống cụ thể của bạn.",
      sendMessage: "gửi tin nhắn",
      seeExamples: "xem ví dụ",
      seeExamplesDesc: "đôi khi việc hiểu thông qua các ví dụ cụ thể về công việc đã làm sẽ dễ dàng hơn.",
      browseProjects: "xem dự án",
      readTestimonials: "đọc nhận xét",
      readTestimonialsDesc: "nghe những gì khách hàng khác nói về trải nghiệm làm việc cùng nhau.",
      clientFeedback: "phản hồi khách hàng",
      exploreLearning: "khám phá học tập",
      exploreLearningDesc: "nếu bạn tò mò về việc tự làm một số điều này, hãy xem những gì mình dạy.",
      learningResources: "tài liệu học tập"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Faq locale={locale} />
      
      {/* Additional Resources Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-neutral-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Still Have Questions */}
            <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.stillHaveQuestions}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t.stillHaveQuestionsDesc}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.quickResponse}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t.quickResponseDesc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Action Items */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">{t.askMeDirectly}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {t.askMeDirectlyDesc}
                  </p>
                  <a
                    href={`/${locale}/contact`}
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    {t.sendMessage}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">{t.seeExamples}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {t.seeExamplesDesc}
                  </p>
                  <a
                    href={`/${locale}/projects`}
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    {t.browseProjects}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">{t.readTestimonials}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {t.readTestimonialsDesc}
                  </p>
                  <a
                    href={`/${locale}/testimonials`}
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    {t.clientFeedback}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">{t.exploreLearning}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {t.exploreLearningDesc}
                  </p>
                  <a
                    href={`/${locale}/learn`}
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    {t.learningResources}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}