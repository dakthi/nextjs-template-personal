import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

interface ProjectsHeroProps {
  locale?: string;
}

export const ProjectsHero = ({ locale = 'en' }: ProjectsHeroProps) => {
  const content = {
    en: {
      tag: "things i've built",
      title: "hey there: here are some projects i've put together over the years",
      description: "a mix of client work, personal experiments, and solutions to problems i've encountered along the way. dive in and see if any of it resonates with what you're working on",
      builtWith: "built with",
      areasExplored: "areas i've explored"
    },
    vi: {
      tag: "những thứ mình đã làm",
      title: "chào bạn: đây là một số dự án mình đã thực hiện qua các năm",
      description: "một hỗn hợp của công việc khách hàng, thử nghiệm cá nhân và giải pháp cho những vấn đề mình gặp phải trên đường đi. hãy xem qua và xem có cái nào phù hợp với những gì bạn đang làm không",
      builtWith: "được xây dựng bằng",
      areasExplored: "lĩnh vực đã khám phá"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;
  return (
    <Container className="flex flex-wrap items-center pt-8 md:pt-16">
      <div className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
            {t.tag}
          </div>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 mb-12">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.builtWith}</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">React</span>
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">Next.js</span>
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">Python</span>
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">Node.js</span>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.areasExplored}</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">automation</span>
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">finance</span>
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">education</span>
              <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">web apps</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};