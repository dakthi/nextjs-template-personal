export interface Session {
  id: string;
  title_en: string;
  title_vi: string;
  description_en: string;
  description_vi: string;
  image: string;
  duration: string;
  price: string;
  category_en: string;
  category_vi: string;
  sessionUrl?: string;
}

export const sessions: Session[] = [
  {
    id: "1",
    title_en: "Small Business Accounting Essentials",
    title_vi: "Kế toán cơ bản cho doanh nghiệp nhỏ",
    description_en:
      "Hands-on accounting basics for entrepreneurs: bookkeeping, VAT, payroll, and staying compliant without getting overwhelmed.",
    description_vi:
      "Kiến thức kế toán thực hành cho chủ doanh nghiệp: ghi sổ, VAT, bảng lương và tuân thủ dễ dàng mà không bị quá tải.",
    image: "/img/accounting.png",
    duration: "90 minutes per session",
    price: "£50 per session",
    category_en: "Finance",
    category_vi: "Tài chính"
  },
  {
    id: "2",
    title_en: "Tech Setup for Small Businesses",
    title_vi: "Thiết lập công nghệ cho doanh nghiệp nhỏ",
    description_en:
      "Step-by-step guidance on setting up email, Google Workspace, automation, and website essentials.",
    description_vi:
      "Hướng dẫn từng bước thiết lập email, Google Workspace, tự động hóa và những công cụ website thiết yếu.",
    image: "/img/tech-setup.png",
    duration: "90 minutes per session",
    price: "£50 per session",
    category_en: "Technology",
    category_vi: "Công nghệ"
  },
  {
    id: "3",
    title_en: "Python & Automation for Beginners",
    title_vi: "Python & Tự động hóa cho người mới bắt đầu",
    description_en:
      "Learn Python fundamentals and create simple automation scripts to save time on repetitive tasks.",
    description_vi:
      "Học các kiến thức cơ bản về Python và viết các script tự động hóa đơn giản để tiết kiệm thời gian cho công việc lặp đi lặp lại.",
    image: "/img/python.png",
    duration: "90 minutes per session",
    price: "£50 per session",
    category_en: "Technology",
    category_vi: "Công nghệ"
  },
  {
    id: "4",
    title_en: "Website Basics for Entrepreneurs",
    title_vi: "Xây dựng website cơ bản cho doanh nhân",
    description_en:
      "Quickly build and manage your own website, from choosing the platform to publishing your first page.",
    description_vi:
      "Xây dựng và quản lý website của riêng bạn một cách nhanh chóng: từ việc chọn nền tảng cho đến xuất bản trang đầu tiên.",
    image: "/img/website.png",
    duration: "90 minutes per session",
    price: "£50 per session",
    category_en: "Technology",
    category_vi: "Công nghệ"
  },
  {
    id: "5",
    title_en: "English Communication for Professionals",
    title_vi: "Giao tiếp tiếng Anh cho người đi làm",
    description_en:
      "Practical coaching for workplace English: presentations, emails, and clear communication.",
    description_vi:
      "Hướng dẫn thực hành tiếng Anh công sở: thuyết trình, viết email và giao tiếp rõ ràng.",
    image: "/img/english.png",
    duration: "90 minutes per session",
    price: "£50 per session",
    category_en: "Language",
    category_vi: "Ngôn ngữ"
  },
  {
    id: "6",
    title_en: "Learning How to Learn",
    title_vi: "Học cách để học hiệu quả",
    description_en:
      "Meta-learning strategies to pick up new skills faster and design your own learning roadmap.",
    description_vi:
      "Chiến lược meta-learning để học kỹ năng mới nhanh hơn và tự thiết kế lộ trình học tập của riêng bạn.",
    image: "/img/learning.png",
    duration: "90 minutes per session",
    price: "£50 per session",
    category_en: "Personal Development",
    category_vi: "Phát triển bản thân"
  }
];
