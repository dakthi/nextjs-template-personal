import Image from "next/image";

interface HeroProps {
  locale?: string;
}

export const Hero = ({ locale = "en" }: HeroProps) => {
  const content = {
    en: {
      title: "the gal who wears many hats",
      paragraph1:
        "most accountants account. i account - but i also automate 80% of it, standardise the workflow, create training videos for onboarding, and then use that to close clients (then proceed to close the client too)",
      paragraph2: {
        line1: "most teachers teach. i do more.",
        line2: "most marketers run ads. i do more.",
        line3: "whatever you need. i do more",
      },
      cta: "find out if i'm real",
      ctaHref: "/blog",
    },
    vi: {
      title: "<b>thi</b> làm đủ thứ",
      paragraph1:
        "kế toán thì chỉ làm kế toán. <b>thi</b> cũng làm kế toán, nhưng mà nó khác – <b>thi</b> tự động hoá 80% công việc, chuẩn hoá quy trình, làm video đào tạo rồi dùng chính hệ thống đó để thu hút khách hàng.",
      paragraph2: {
        line1: "<b>thi</b> cũng dạy, nhưng mà nó khác.",
        line2: "<b>thi</b> cũng làm marketing, nhưng mà nó khác.",
        line3: "nói chung là cần gì, <b>thi</b> cũng làm, nhưng mà nó khác.",
      },
      cta: "vậy thi làm gì thế?",
      ctaHref: "/blog",
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-wrap xl:mt-14 xl:pb-5 mb-16 md:mb-40">
        
        {/* IMAGE */}
        <div className="order-first lg:order-last flex w-full lg:w-1/2">
          <div className="relative w-full h-64 lg:h-full flex items-stretch">
            <div className="w-full h-full rounded-xl shadow-xl shadow-black/30 dark:shadow-black/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <Image
                src="/img/hero.png"
                alt="hero illustration"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="order-last lg:order-first flex items-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="max-w-xl">
            <h1
              className="text-xl font-normal leading-snug tracking-wide text-black dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight lowercase"
              dangerouslySetInnerHTML={{ __html: t.title }}
            />
            <p
              className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 lowercase lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: locale === "en" ? content.en.paragraph1 : content.vi.paragraph1,
              }}
            />
            <p
              className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 lowercase lg:text-xl"
              dangerouslySetInnerHTML={{
                __html:
                  locale === "en"
                    ? `${content.en.paragraph2.line1}<br/>${content.en.paragraph2.line2}<br/>${content.en.paragraph2.line3}`
                    : `${content.vi.paragraph2.line1}<br/>${content.vi.paragraph2.line2}<br/>${content.vi.paragraph2.line3}`,
              }}
            />
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-6">
              <a
                href={t.ctaHref}
                className="bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
