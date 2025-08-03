interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  category 
}: ProjectCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-sm transition-shadow duration-200">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">{title}</h3>
          <span className="text-xs text-gray-400 uppercase tracking-wide ml-4 flex-shrink-0">
            {category}
          </span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="mb-4 pb-4 border-b border-gray-100">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-gray-500 text-xs"
            >
              {tech}{index < technologies.length - 1 ? ' •' : ''}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-4 text-xs text-gray-500">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            view code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            live demo
          </a>
        )}
        {!githubUrl && !liveUrl && (
          <span className="text-gray-400">in development</span>
        )}
      </div>
    </div>
  );
};