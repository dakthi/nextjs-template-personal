import { Container } from "@/components/Container";
import { Testimonials } from "@/components/Testimonials";
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
      title: "Thi Nguyen - Testimonials & Client Feedback",
      description: "What people say about working with Thi Nguyen - real feedback from real projects. Client testimonials for automation consulting and full-stack development services from a London-based specialist.",
      keywords: ["Thi Nguyen testimonials", "Thi Nguyen reviews", "testimonials", "client feedback", "automation consultant reviews", "full-stack developer testimonials"],
      ogTitle: "Thi Nguyen - Testimonials & Client Feedback",
      ogDescription: "What people say about working with Thi Nguyen - real feedback from real projects."
    },
    vi: {
      title: "Thi Nguyen - Nhận xét & Phản hồi khách hàng",
      description: "Những gì mọi người nói về việc làm việc với Thi Nguyen - phản hồi thực tế từ các dự án thực tế. Nhận xét của khách hàng về dịch vụ tư vấn tự động hóa và phát triển full-stack từ chuyên gia tại London.",
      keywords: ["Thi Nguyen nhận xét", "Thi Nguyen đánh giá", "nhận xét", "phản hồi khách hàng", "đánh giá tư vấn tự động hóa", "nhận xét nhà phát triển full-stack"],
      ogTitle: "Thi Nguyen - Nhận xét & Phản hồi khách hàng",
      ogDescription: "Những gì mọi người nói về việc làm việc với Thi Nguyen - phản hồi thực tế từ các dự án thực tế."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}/testimonials`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}/testimonials`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TestimonialsPage({ params }: Props) {
  const locale = params.locale;
  
  const content = {
    en: {
      clientFeedback: "client feedback",
      heroTitle: "what people say about working with me",
      heroDescription: "real feedback from real projects. no fake reviews, no cherry-picking: just honest thoughts from people i've worked with.",
      projectTypes: "project types",
      clientIndustries: "client industries",
      whyIShare: "why i share these",
      whyIShareDesc: "because anyone can write impressive copy on their website. what matters is what people actually think after working together.",
      howIWork: "how i work",
      howIWorkDesc1: "every project starts with understanding your actual problem, not just what you think you need.",
      howIWorkDesc2: "i document everything, explain my thinking, and make sure you can manage things without me when we're done.",
      quote: "good work speaks for itself, but sometimes it needs a microphone",
      ctaTitle: "ready to add your testimonial?",
      ctaDescription: "every project is different, but they all start with a conversation. tell me about your challenge and let's see if we're a good fit.",
      startConversation: "start a conversation",
      seeMyWork: "see my work",
      projectTypeLabels: {
        automation: "automation",
        webDevelopment: "web development",
        consulting: "consulting",
        training: "training"
      },
      industryLabels: {
        retail: "retail",
        professionalServices: "professional services",
        hospitality: "hospitality",
        education: "education"
      }
    },
    vi: {
      clientFeedback: "phản hồi khách hàng",
      heroTitle: "những gì mọi người nói về việc làm việc với mình",
      heroDescription: "phản hồi thực tế từ các dự án thực tế. không có đánh giá giả, không chọn lọc: chỉ là những suy nghĩ thành thật từ những người đã làm việc với mình.",
      projectTypes: "loại dự án",
      clientIndustries: "ngành nghề khách hàng",
      whyIShare: "tại sao mình chia sẻ những điều này",
      whyIShareDesc: "bởi vì ai cũng có thể viết những lời quảng cáo ấn tượng trên trang web của họ. điều quan trọng là mọi người thực sự nghĩ gì sau khi làm việc cùng nhau.",
      howIWork: "cách mình làm việc",
      howIWorkDesc1: "mọi dự án đều bắt đầu bằng việc hiểu vấn đề thực tế của bạn, không chỉ những gì bạn nghĩ mình cần.",
      howIWorkDesc2: "mình ghi chép mọi thứ, giải thích suy nghĩ của mình và đảm bảo bạn có thể quản lý mọi thứ mà không cần mình khi chúng ta hoàn thành.",
      quote: "công việc tốt tự nói lên tất cả, nhưng đôi khi nó cần một chiếc micro",
      ctaTitle: "sẵn sàng thêm nhận xét của bạn?",
      ctaDescription: "mỗi dự án đều khác nhau, nhưng tất cả đều bắt đầu bằng một cuộc trò chuyện. hãy kể cho mình về thách thức của bạn và xem liệu chúng ta có phù hợp không.",
      startConversation: "bắt đầu cuộc trò chuyện",
      seeMyWork: "xem công việc của mình",
      projectTypeLabels: {
        automation: "tự động hóa",
        webDevelopment: "phát triển web",
        consulting: "tư vấn",
        training: "đào tạo"
      },
      industryLabels: {
        retail: "bán lẻ",
        professionalServices: "dịch vụ chuyên nghiệp",
        hospitality: "khách sạn",
        education: "giáo dục"
      }
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      {/* Hero Section */}
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              {t.clientFeedback}
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t.heroDescription}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 mb-12">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.projectTypes}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.projectTypeLabels.automation}</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.projectTypeLabels.webDevelopment}</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.projectTypeLabels.consulting}</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.projectTypeLabels.training}</span>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.clientIndustries}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.industryLabels.retail}</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.industryLabels.professionalServices}</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.industryLabels.hospitality}</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">{t.industryLabels.education}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Testimonials Component */}
      <Container className="mb-20">
        <Testimonials />
      </Container>

      {/* Additional Context Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Why Testimonials Matter */}
            <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.whyIShare}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t.whyIShareDesc}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.howIWork}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                    {t.howIWorkDesc1}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t.howIWorkDesc2}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Call to Action */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-neutral-800 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  {t.ctaTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t.ctaDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    {t.startConversation}
                  </a>
                  <a
                    href={`/${locale}/projects`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                  >
                    {t.seeMyWork}
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