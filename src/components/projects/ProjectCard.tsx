interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  category: string;
  locale?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  articleUrl,
  category,
  locale = "en"
}: ProjectCardProps) => {
  const content = {
    en: {
      readCaseStudy: "read case study →",
      viewCode: "view code",
      liveDemo: "live demo",
      detailsComingSoon: "details coming soon"
    },
    vi: {
      readCaseStudy: "đọc nghiên cứu điển hình →",
      viewCode: "xem code",
      liveDemo: "demo trực tiếp",
      detailsComingSoon: "chi tiết sắp có"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;
  return (
    <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-sm p-6 hover:shadow-sm transition-shadow duration-200">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">{title}</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide ml-4 flex-shrink-0">
            {category}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-gray-500 dark:text-gray-400 text-xs"
            >
              {tech}{index < technologies.length - 1 ? ' •' : ''}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
        {articleUrl && (
          <a
            href={`/${locale}${articleUrl}`}
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors font-medium"
          >
            {t.readCaseStudy}
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            {t.viewCode}
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            {t.liveDemo}
          </a>
        )}
        {!articleUrl && !githubUrl && !liveUrl && (
          <span className="text-gray-400 dark:text-gray-500">{t.detailsComingSoon}</span>
        )}
      </div>
    </div>
  );
};