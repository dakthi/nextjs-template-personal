"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Category = "general" | "services" | "workflow" | "businesses";

interface FaqProps {
  locale?: string;
}

const faqContent: Record<string, Record<Category, { question: string; answer: string }[]>> = {
  en: {
    general: [
      { question: "aren't you specialised in anything?", answer: "i had decent understanding of a wide breadth of specialties, good enough to power a multi‑million start‑up team, but not enough to be a specialist in a corporate. like a swiss army knife, if that makes sense!" },
      { question: "how did you learn all this stuff?", answer: "honestly? youtube, google, and a lot of trial and error. plus asking way too many questions to anyone who'd listen. i'm naturally curious and don't mind looking stupid while learning something new." },
      { question: "do you work remotely or on-site?", answer: "both, depending on what makes sense. for automation projects, i usually need to be there initially to understand the workflow. for web development or consulting, remote works perfectly fine." },
      { question: "what's your typical turnaround time?", answer: "depends on the project, but i'm pretty quick. simple websites or automation scripts can be done in a few days. more complex stuff might take a few weeks. i'll give you a realistic timeline upfront." }
    ],
    services: [
      { question: "what services do you offer then?", answer: "project‑based consultancy on marketing, ai and automation. i also make fully functioning full‑stack websites, take beautiful photography of your events and teach english." },
      { question: "can you help with social media management?", answer: "i don't do the day-to-day posting, but i can set up systems that make it way easier. think automated content scheduling, analytics dashboards, or tools that help you batch create content more efficiently." },
      { question: "do you offer ongoing support or just one-time projects?", answer: "mostly one-time projects, but i'm happy to help with maintenance or updates if needed. i prefer to build things that don't need much babysitting, though." },
      { question: "what programming languages do you use?", answer: "mainly javascript/typescript for web stuff, python for automation and data work. i pick whatever tool makes the most sense for your specific problem rather than forcing everything into one language." },
      { question: "can you integrate with our existing systems?", answer: "probably, yeah. i've worked with most common business software - crms, accounting systems, e-commerce platforms. if it has an api or can export data, we can usually make it play nice with other tools." }
    ],
    workflow: [
      { question: "let's be more specific, how would you help me if i have a business?", answer: "i'll go into your business as an intern by morning, doing things your team does. by evening, you would be presented with a full‑stack solution that automates or speeds up 60–80% of your workflow." },
      { question: "what if we don't know what needs automating?", answer: "that's usually where i start - watching what you do and asking 'why are you doing this manually?' most people are so used to their workflows they don't see the inefficiencies anymore." },
      { question: "how do you ensure the automation doesn't break our existing processes?", answer: "i test everything thoroughly and usually build in fallbacks. plus i document everything so your team knows exactly how it works. no black box solutions that leave you helpless if something goes wrong." },
      { question: "what happens if our needs change after automation is set up?", answer: "i build things to be flexible when possible. but honestly, if your needs change dramatically, you might need updates. i try to anticipate this and make systems modular so we can adjust pieces without rebuilding everything." },
      { question: "can you train our team to manage the automated systems?", answer: "absolutely. in fact, i prefer it that way. i'll create documentation, record training videos, and walk your team through everything. the goal is to make you independent, not dependent on me." }
    ],
    businesses: [
      { question: "what kind of businesses are you interested in working with?", answer: "the boring ones. i mean, mom‑and‑pop shops, brick‑and‑mortar businesses: the ones with years of reputation and experience, but without the tech to match. i love bringing in automation, ai, and smarter workflows to emulsify that deep stack of expertise you've simmered for years. think of it as giving your business a michelin‑star upgrade, without losing the original flavor." },
      { question: "do you work with startups or just established businesses?", answer: "i love working with established businesses that have proven models but need tech upgrades. startups are fun but they're usually trying to figure out their processes, not automate them." },
      { question: "what size businesses do you typically work with?", answer: "anywhere from solo entrepreneurs to companies with 50-100 employees. big enough to have real problems worth solving, small enough that i can actually understand the whole operation." },
      { question: "do you have experience in my industry?", answer: "maybe, maybe not. but good processes are good processes regardless of industry. plus, sometimes an outside perspective catches things that industry veterans miss because they're too close to the problem." },
      { question: "what if our budget is limited?", answer: "let's talk about it. i'm more interested in solving interesting problems than maximizing revenue. we can often start small with the biggest pain point and expand from there as you see results." },
      { question: "how do you handle confidentiality and data security?", answer: "very seriously. i'll sign whatever ndas you need, and i follow security best practices. your data stays your data - i don't keep copies or use your info for anything else." }
    ]
  },
  vi: {
    general: [
      { question: "bạn không chuyên về lĩnh vực nào à?", answer: "thi có hiểu biết khá tốt về nhiều chuyên môn khác nhau, đủ để hỗ trợ một đội startup triệu đô, nhưng chưa đủ để trở thành chuyên gia trong doanh nghiệp lớn. giống như một chiếc dao đa năng vậy!" },
      { question: "làm sao bạn học được tất cả những thứ này?", answer: "thành thật mà nói? youtube, google, và rất nhiều thử và sai. cộng với việc hỏi quá nhiều câu hỏi từ bất cứ ai sẵn sàng lắng nghe. thi tự nhiên tò mò và không ngại trông ngu ngốc khi học cái mới." },
      { question: "bạn làm việc từ xa hay tại chỗ?", answer: "tùy vào điều gì hợp lý. với dự án tự động hóa, thi thường cần có mặt ban đầu để hiểu quy trình. với phát triển web hoặc tư vấn, làm từ xa hoàn toàn ổn." },
      { question: "thời gian hoàn thành thông thường của bạn là bao lâu?", answer: "tùy dự án, nhưng thi khá nhanh. website đơn giản hoặc script tự động hóa có thể hoàn thành trong vài ngày. thứ phức tạp hơn có thể mất vài tuần. thi sẽ đưa lịch trình thực tế ngay từ đầu." }
    ],
    services: [
      { question: "vậy bạn cung cấp những dịch vụ gì?", answer: "tư vấn theo dự án về marketing, ai và tự động hóa. thi cũng làm website full-stack hoàn chỉnh, chụp ảnh sự kiện đẹp và dạy tiếng anh." },
      { question: "bạn có thể giúp quản lý mạng xã hội không?", answer: "thi không làm việc đăng bài hàng ngày, nhưng có thể thiết lập hệ thống giúp việc đó dễ dàng hơn nhiều. nghĩ đến việc lên lịch nội dung tự động, bảng điều khiển phân tích, hoặc công cụ giúp tạo nội dung hàng loạt hiệu quả hơn." },
      { question: "bạn có hỗ trợ liên tục hay chỉ dự án một lần?", answer: "chủ yếu là dự án một lần, nhưng thi sẵn sàng giúp bảo trì hoặc cập nhật nếu cần. thi thích xây dựng những thứ không cần quá nhiều chăm sóc." },
      { question: "bạn sử dụng những ngôn ngữ lập trình nào?", answer: "chủ yếu javascript/typescript cho web, python cho tự động hóa và dữ liệu. thi chọn công cụ nào hợp lý nhất cho vấn đề cụ thể của bạn thay vì ép tất cả vào một ngôn ngữ." },
      { question: "bạn có thể tích hợp với hệ thống hiện tại của chúng tôi không?", answer: "có lẽ là có. thi đã làm việc với hầu hết phần mềm kinh doanh phổ biến - crm, hệ thống kế toán, nền tảng thương mại điện tử. nếu nó có api hoặc có thể xuất dữ liệu, chúng ta thường có thể làm nó hoạt động với các công cụ khác." }
    ],
    workflow: [
      { question: "cụ thể hơn, bạn sẽ giúp mình như thế nào nếu mình có doanh nghiệp?", answer: "thi sẽ vào doanh nghiệp của bạn như thực tập sinh vào buổi sáng, làm những việc đội của bạn làm. đến tối, bạn sẽ được trình bày một giải pháp full-stack tự động hóa hoặc tăng tốc 60-80% quy trình làm việc của bạn." },
      { question: "nếu chúng tôi không biết cái gì cần tự động hóa thì sao?", answer: "đó thường là nơi thi bắt đầu - quan sát những gì bạn làm và hỏi 'tại sao bạn làm thủ công?' hầu hết mọi người đã quen với quy trình của họ đến mức không còn thấy những điểm kém hiệu quả nữa." },
      { question: "bạn đảm bảo tự động hóa không phá vỡ quy trình hiện tại như thế nào?", answer: "thi test mọi thứ kỹ lưỡng và thường xây dựng các phương án dự phòng. cộng với việc tài liệu hóa mọi thứ để đội của bạn biết chính xác cách nó hoạt động. không có giải pháp hộp đen nào khiến bạn bất lực khi có gì đó sai." },
      { question: "nếu nhu cầu của chúng tôi thay đổi sau khi tự động hóa được thiết lập thì sao?", answer: "thi xây dựng mọi thứ linh hoạt khi có thể. nhưng thành thật mà nói, nếu nhu cầu của bạn thay đổi đáng kể, bạn có thể cần cập nhật. thi cố gắng dự đoán điều này và làm hệ thống modular để có thể điều chỉnh từng phần mà không cần xây dựng lại tất cả." },
      { question: "bạn có thể đào tạo đội của chúng tôi quản lý hệ thống tự động không?", answer: "hoàn toàn có thể. thực ra, thi thích cách đó hơn. thi sẽ tạo tài liệu, ghi video đào tạo, và hướng dẫn đội của bạn từng bước. mục tiêu là làm bạn độc lập, không phụ thuộc vào thi." }
    ],
    businesses: [
      { question: "bạn quan tâm làm việc với loại doanh nghiệp nào?", answer: "những loại nhàm chán. ý thi là, các cửa hàng gia đình, doanh nghiệp truyền thống: những nơi có nhiều năm uy tín và kinh nghiệm, nhưng thiếu công nghệ phù hợp. thi thích mang tự động hóa, ai và quy trình thông minh hơn để hòa quyện với chuyên môn sâu mà bạn đã ấp ủ nhiều năm. nghĩ về việc nâng cấp doanh nghiệp lên tiêu chuẩn michelin mà không mất đi hương vị gốc." },
      { question: "bạn làm việc với startup hay chỉ doanh nghiệp đã thành lập?", answer: "thi thích làm việc với doanh nghiệp đã thành lập có mô hình đã chứng minh nhưng cần nâng cấp công nghệ. startup thì vui nhưng họ thường đang cố gắng tìm ra quy trình, chứ không phải tự động hóa chúng." },
      { question: "bạn thường làm việc với doanh nghiệp quy mô nào?", answer: "từ doanh nhân cá nhân đến công ty 50-100 nhân viên. đủ lớn để có vấn đề thực sự đáng giải quyết, đủ nhỏ để thi có thể hiểu toàn bộ hoạt động." },
      { question: "bạn có kinh nghiệm trong ngành của tôi không?", answer: "có thể có, có thể không. nhưng quy trình tốt là quy trình tốt bất kể ngành nào. cộng với đôi khi góc nhìn từ bên ngoài bắt được những thứ mà các chuyên gia trong ngành bỏ lỡ vì họ quá gần với vấn đề." },
      { question: "nếu ngân sách của chúng tôi hạn chế thì sao?", answer: "hãy nói chuyện về nó. thi quan tâm đến việc giải quyết vấn đề thú vị hơn là tối đa hóa doanh thu. chúng ta thường có thể bắt đầu nhỏ với điểm đau lớn nhất và mở rộng từ đó khi bạn thấy kết quả." },
      { question: "bạn xử lý tính bảo mật và bảo mật dữ liệu như thế nào?", answer: "rất nghiêm túc. thi sẽ ký bất cứ nda nào bạn cần, và thi tuân theo các thực hành bảo mật tốt nhất. dữ liệu của bạn vẫn là của bạn - thi không giữ bản sao hoặc sử dụng thông tin của bạn cho mục đích khác." }
    ]
  }
};

const categories: Record<string, { key: Category; label: string }[]> = {
  en: [
    { key: "general", label: "general" },
    { key: "services", label: "services" },
    { key: "workflow", label: "workflow" },
    { key: "businesses", label: "businesses" }
  ],
  vi: [
    { key: "general", label: "chung" },
    { key: "services", label: "dịch vụ" },
    { key: "workflow", label: "quy trình" },
    { key: "businesses", label: "doanh nghiệp" }
  ]
};

const uiContent = {
  en: {
    tag: "questions & answers",
    title: "things you might be wondering about",
    description: "honest answers to the questions that come up most often. if you don't see what you're looking for, just ask.",
    quote: "\"the best questions are the ones that make you think differently\""
  },
  vi: {
    tag: "hỏi & đáp",
    title: "những điều bạn có thể đang thắc mắc",
    description: "câu trả lời thành thật cho những câu hỏi xuất hiện thường xuyên nhất. nếu bạn không thấy điều mình tìm kiếm, cứ hỏi.",
    quote: "\"những câu hỏi hay nhất là những câu làm bạn suy nghĩ khác đi\""
  }
};

export const Faq = ({ locale = "en" }: FaqProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("general");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const currentCategories = categories[locale] || categories.en;
  const currentContent = faqContent[locale] || faqContent.en;
  const currentUI = uiContent[locale as keyof typeof uiContent] || uiContent.en;
  
  const activeIndex = currentCategories.findIndex(c => c.key === activeCategory);

  const handleCategoryChange = (newCategory: Category) => {
    if (newCategory === activeCategory) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(newCategory);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + currentCategories.length) % currentCategories.length;
    handleCategoryChange(currentCategories[newIndex].key);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % currentCategories.length;
    handleCategoryChange(currentCategories[newIndex].key);
  };

  return (
    <section className="w-full bg-white dark:bg-neutral-900">
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              {currentUI.tag}
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              {currentUI.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {currentUI.description}
            </p>
          </div>

          {/* Mobile Carousel Selector */}
          <div className="mb-8 block lg:hidden">
            <div className="flex items-center justify-center space-x-6">
              <button 
                onClick={handlePrev} 
                className="p-2 rounded-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 active:scale-95"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="relative min-w-[120px] h-8 flex items-center justify-center">
                <span 
                  className={`absolute text-gray-800 dark:text-white font-medium text-lg text-center transition-all duration-300 ${
                    isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  {currentCategories[activeIndex].label}
                </span>
              </div>
              <button 
                onClick={handleNext} 
                className="p-2 rounded-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 active:scale-95"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-xs italic mt-2">
              {currentUI.quote}
            </p>
          </div>

          {/* Desktop Horizontal Selector */}
          <div className="hidden lg:flex items-center justify-center mb-8">
            <div className="relative">
              <div className="flex bg-gray-100 dark:bg-neutral-800 rounded-full p-1 overflow-hidden">
                {currentCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => handleCategoryChange(cat.key)}
                    className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeCategory === cat.key ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            <div className={`space-y-4 transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              {currentContent[activeCategory].map((item, index) => (
                <Disclosure key={`${activeCategory}-${index}`} as="div">
                  {({ open }) => (
                    <div className="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden transform transition-all duration-200 hover:shadow-md">
                      <DisclosureButton className="flex items-center justify-between w-full px-6 py-4 text-left bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
                        <span className="text-gray-900 dark:text-white font-medium">{item.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </DisclosureButton>
                      <DisclosurePanel className="px-6 py-4 bg-gray-50 dark:bg-neutral-700 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
