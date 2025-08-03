import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  category: string;
  courseUrl?: string;
}

export const CourseCard = ({ 
  title, 
  description, 
  image, 
  duration,
  level,
  price,
  category,
  courseUrl
}: CourseCardProps) => {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  
  const getBlogSlug = (title: string) => {
    const slugMap: { [key: string]: string } = {
      "Small Business Accounting Essentials": "small-business-accounting",
      "Kế toán cơ bản cho doanh nghiệp nhỏ": "small-business-accounting",
      "Tech Setup for Small Businesses": "tech-setup-small-business",
      "Thiết lập công nghệ cho doanh nghiệp nhỏ": "tech-setup-small-business",
      "Python & Automation for Beginners": "python-automation-beginners",
      "Python & Tự động hóa cho người mới bắt đầu": "python-automation-beginners",
      "Website Basics for Entrepreneurs": "website-basics-entrepreneurs",
      "Xây dựng website cơ bản cho doanh nhân": "website-basics-entrepreneurs",
      "English Communication for Professionals": "english-communication-professionals",
      "Giao tiếp tiếng Anh cho người đi làm": "english-communication-professionals",
      "Learning How to Learn": "learning-how-to-learn",
      "Học cách để học hiệu quả": "learning-how-to-learn"
    };
    return slugMap[title] || "";
  };
  
  const blogSlug = getBlogSlug(title);
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "border-l-green-500";
      case "Intermediate":
        return "border-l-yellow-500";
      case "Advanced":
        return "border-l-red-500";
      default:
        return "border-l-gray-300";
    }
  };

  return (
    <a
      href={`/${currentLocale}/blog/${blogSlug}`}
      className={`border-l-4 ${getLevelColor(level)} bg-white dark:bg-neutral-800 hover:shadow-sm transition-all duration-200 mb-4 sm:mb-6 block cursor-pointer`}
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
              <span className="text-xs text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-neutral-700 px-2 py-1 rounded self-start">
                {level.toLowerCase()}
              </span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {category}
            </span>
          </div>
          <div className="text-left sm:text-right mt-2 sm:mt-0 sm:ml-4">
            <div className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">{price}</div>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
        
        
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {courseUrl && (
            <a
              href={courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline underline-offset-2 hover:no-underline transition-all"
            >
              check it out →
            </a>
          )}
          <span className="text-gray-600 dark:text-gray-400 text-xs">{duration}</span>
        </div>
      </div>
    </a>
  );
};