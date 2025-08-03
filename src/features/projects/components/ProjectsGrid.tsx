import { ProjectCard } from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "shop dashboard thing",
    description: "got tired of switching between 5 different tools to check orders and inventory. built this to see everything in one place. nothing fancy, just works.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.example.com",
    category: "web stuff"
  },
  {
    id: "2", 
    title: "money tracking app",
    description: "started tracking expenses in spreadsheets, then realized i was spending more time on the spreadsheet than checking my actual spending. so i made this.",
    technologies: ["Next.js", "Python", "D3.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/example/finance-analytics",
    liveUrl: "https://finance-analytics.example.com",
    category: "finance"
  },
  {
    id: "3",
    title: "learning platform experiment",
    description: "wanted to see if i could build something better than the clunky university portal. spoiler: it wasn't that hard.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Redis"],
    githubUrl: "https://github.com/example/edu-platform",
    category: "education"
  },
  {
    id: "4",
    title: "workflow automation thingy",
    description: "was doing the same boring tasks every week. now this does them for me while i drink coffee. best trade-off ever.",
    technologies: ["Python", "FastAPI", "Celery", "Redis", "Docker"],
    githubUrl: "https://github.com/example/automation-engine",
    liveUrl: "https://automation.example.com",
    category: "automation"
  },
  {
    id: "5",
    title: "client organizer",
    description: "sticky notes everywhere weren't cutting it anymore. built this to keep track of who needs what and when. my desk is cleaner now.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/example/crm-system",
    category: "business tools"
  },
  {
    id: "6",
    title: "content scheduler",
    description: "posting on 3 platforms manually was eating my soul. this schedules everything and tells me how it's doing. soul = saved.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel", "Social APIs"],
    githubUrl: "https://github.com/example/content-hub",
    liveUrl: "https://content-hub.example.com",
    category: "marketing"
  }
];

interface ProjectsGridProps {
  filterCategory?: string;
}

export const ProjectsGrid = ({ filterCategory }: ProjectsGridProps) => {
  const filteredProjects = filterCategory 
    ? projects.filter(project => project.category === filterCategory)
    : projects;

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left Column - Philosophy */}
      <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">my approach</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              most of these started when something annoyed me enough to fix it. 
              i don&apos;t build things to impress anyone: i build them because they solve a real problem i was having.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">philosophy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              simple solutions over complicated ones. if i can&apos;t explain what it does in one sentence, 
              it&apos;s probably trying to do too much.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              every project here either saves me time, makes something easier, or fixes something that was broken. 
              that&apos;s pretty much my only criteria.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">tech choices</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              i pick tools based on what gets the job done, not what&apos;s trendy. 
              sometimes that&apos;s react, sometimes it&apos;s vanilla javascript, sometimes it&apos;s python. 
              whatever works best for the problem.
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-500 text-xs italic">
              &quot;the best code is the code that solves your problem and then gets out of the way&quot;
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
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};