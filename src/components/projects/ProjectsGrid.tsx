import { ProjectCard } from "./ProjectCard";
import { projects, type Project } from "@/content/projects";

interface ProjectsGridProps {
  filterCategory?: string;
  locale?: string;
}

export const ProjectsGrid = ({ filterCategory, locale = 'en' }: ProjectsGridProps) => {
  const filteredProjects = filterCategory 
    ? projects.filter(project => {
        const category = locale === "vi" ? project.category_vi : project.category_en;
        return category === filterCategory;
      })
    : projects;

  const content = {
    en: {
      approach: "my approach",
      approachText: "most of these started when something annoyed me enough to fix it. i don't build things to impress anyone: i build them because they solve a real problem i was having.",
      philosophy: "philosophy",
      philosophyText1: "simple solutions over complicated ones. if i can't explain what it does in one sentence, it's probably trying to do too much.",
      philosophyText2: "every project here either saves me time, makes something easier, or fixes something that was broken. that's pretty much my only criteria.",
      techChoices: "tech choices",
      techChoicesText: "i pick tools based on what gets the job done, not what's trendy. sometimes that's react, sometimes it's vanilla javascript, sometimes it's python. whatever works best for the problem.",
      quote: "\"the best code is the code that solves your problem and then gets out of the way\""
    },
    vi: {
      approach: "cách tiếp cận của mình",
      approachText: "hầu hết những dự án này bắt đầu khi có thứ gì đó khiến mình khó chịu đến mức phải sửa nó. mình không xây dựng để gây ấn tượng với ai: mình xây dựng vì chúng giải quyết vấn đề thực tế mà mình đang gặp phải.",
      philosophy: "triết lý",
      philosophyText1: "giải pháp đơn giản hơn những cái phức tạp. nếu mình không thể giải thích nó làm gì trong một câu, có lẽ nó đang cố gắng làm quá nhiều thứ.",
      philosophyText2: "mỗi dự án ở đây hoặc giúp mình tiết kiệm thời gian, làm điều gì đó dễ dàng hơn, hoặc sửa chữa thứ gì đó bị hỏng. đó là tiêu chí duy nhất của mình.",
      techChoices: "lựa chọn công nghệ",
      techChoicesText: "mình chọn công cụ dựa trên việc hoàn thành công việc, không phải điều gì đang thịnh hành. đôi khi là react, đôi khi là vanilla javascript, đôi khi là python. bất cứ thứ gì hoạt động tốt nhất cho vấn đề.",
      quote: "\"code tốt nhất là code giải quyết vấn đề của bạn rồi tránh ra khỏi đường\""
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left Column - Philosophy */}
      <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.approach}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t.approachText}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.philosophy}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
              {t.philosophyText1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t.philosophyText2}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.techChoices}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t.techChoicesText}
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-xs italic">
              {t.quote}
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Column - Project Cards */}
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={locale === "vi" ? project.title_vi : project.title_en}
              description={locale === "vi" ? project.description_vi : project.description_en}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              articleUrl={project.articleUrl}
              category={locale === "vi" ? project.category_vi : project.category_en}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};