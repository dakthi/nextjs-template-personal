export interface Project {
  id: string;
  title_en: string;
  title_vi: string;
  description_en: string;
  description_vi: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  category_en: string;
  category_vi: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title_en: "Cadmore Auctions Digital Growth",
    title_vi: "Tăng trưởng số hóa của Cadmore Auctions",
    description_en:
      "Executed 12 international auctions and created automated Google Apps Scripts, saving £9,321 annually. Built the company's first social media presence and grew TikTok to 10,000 followers. Redesigned WordPress site with SEO-driven content strategy, boosting monthly sales by £160k and web traffic by 47%.",
    description_vi:
      "Thực hiện 12 phiên đấu giá quốc tế và tạo các script tự động bằng Google Apps, tiết kiệm £9,321 mỗi năm. Xây dựng sự hiện diện mạng xã hội đầu tiên của công ty và tăng TikTok lên 10.000 người theo dõi. Thiết kế lại website WordPress với chiến lược nội dung SEO, tăng doanh số hàng tháng thêm £160k và lưu lượng truy cập web 47%.",
    technologies: [
      "WordPress",
      "Google Apps Script",
      "Elementor",
      "Facebook Ads",
      "TikTok Ads"
    ],
    liveUrl: "https://cadmoreauctions.co.uk",
    articleUrl: "/blog/cadmore-auctions-digital-transformation",
    category_en: "auction & marketing",
    category_vi: "đấu giá & marketing"
  },
  {
    id: "2",
    title_en: "Auction Platform Migration & Optimisation",
    title_vi: "Di chuyển và tối ưu hóa nền tảng đấu giá",
    description_en:
      "Fully managed Auctionet platform implementation, from cataloguing and photography to invoicing and shipping. Successfully listed 1,000+ items, generating £12,000 in the first month, and coordinated multi-national teams ensuring compliance and seamless payments.",
    description_vi:
      "Quản lý toàn bộ việc triển khai nền tảng Auctionet, từ việc lập danh mục và chụp ảnh đến lập hóa đơn và vận chuyển. Đăng tải thành công hơn 1.000 mặt hàng, tạo ra £12,000 trong tháng đầu tiên và điều phối các nhóm quốc tế để đảm bảo tuân thủ và thanh toán trơn tru.",
    technologies: [
      "Auctionet",
      "Photography",
      "Cloud Storage",
      "Payment Integration",
      "Team Coordination"
    ],
    articleUrl: "/blog/auction-platform-migration",
    category_en: "operations & workflow",
    category_vi: "vận hành & quy trình"
  },
  {
    id: "3",
    title_en: "ARTification Cloud Submission System",
    title_vi: "Hệ thống nộp bài trực tuyến ARTification",
    description_en:
      "Developed a cloud-based system managing £10,000 worth of artwork submissions annually, streamlining selection workflows and improving artist payment tracking. Enhanced financial reporting and delivered visual financial presentations for AGMs.",
    description_vi:
      "Phát triển hệ thống đám mây quản lý lượng tác phẩm trị giá £10,000 mỗi năm, tối ưu hóa quy trình lựa chọn và cải thiện theo dõi thanh toán cho nghệ sĩ. Nâng cao báo cáo tài chính và trình bày báo cáo trực quan tại các cuộc họp thường niên.",
    technologies: [
      "Google Workspace",
      "Cloud Storage",
      "Financial Reporting Tools"
    ],
    articleUrl: "/blog/artification-cloud-system",
    category_en: "arts management",
    category_vi: "quản lý nghệ thuật"
  },
  {
    id: "4",
    title_en: "IELTS Online Curriculum & Finance Automation",
    title_vi: "Giáo trình IELTS trực tuyến & tự động hóa tài chính",
    description_en:
      "Founded and scaled an IELTS learning platform generating £20,000 in the first Covid year, growing 10% annually. Optimised payroll, invoicing, and compliance processes for remote teams, cutting operational costs by 20%.",
    description_vi:
      "Sáng lập và mở rộng nền tảng học IELTS trực tuyến, đạt doanh thu £20,000 trong năm Covid đầu tiên, tăng trưởng 10% hàng năm. Tối ưu hóa quy trình trả lương, lập hóa đơn và tuân thủ cho các nhóm làm việc từ xa, giảm chi phí vận hành 20%.",
    technologies: [
      "Google Sheets",
      "Accounting Automation",
      "Online Learning Tools"
    ],
    articleUrl: "/blog/ielts-platform-automation",
    category_en: "education & finance",
    category_vi: "giáo dục & tài chính"
  },
  {
    id: "5",
    title_en: "Livestream Infrastructure Upgrade",
    title_vi: "Nâng cấp hạ tầng livestream",
    description_en:
      "Integrated high-definition video conferencing tools to support cross-border auctions between the UK and Vietnam, achieving £70,000 in sales within the first two days of operation.",
    description_vi:
      "Tích hợp công cụ hội nghị video chất lượng cao hỗ trợ đấu giá xuyên biên giới giữa Anh và Việt Nam, đạt doanh số £70,000 trong hai ngày đầu tiên.",
    technologies: [
      "Video Conferencing",
      "Livestreaming",
      "Remote Collaboration Tools"
    ],
    category_en: "video & streaming",
    category_vi: "video & phát trực tiếp"
  },
  {
    id: "6",
    title_en: "Content Strategy & Template System",
    title_vi: "Chiến lược nội dung & hệ thống mẫu",
    description_en:
      "Created a repeatable 5-template content strategy for social media, scaling short- and long-form content production across 4 platforms, lowering CPA to £0.11 and accelerating growth in key customer segments.",
    description_vi:
      "Tạo chiến lược nội dung lặp lại với 5 mẫu cho mạng xã hội, mở rộng sản xuất nội dung dạng ngắn và dài trên 4 nền tảng, giảm CPA xuống £0.11 và thúc đẩy tăng trưởng trong các phân khúc khách hàng chính.",
    technologies: [
      "Social Media APIs",
      "Content Automation",
      "SEO",
      "Meta Ads Manager"
    ],
    category_en: "marketing & content",
    category_vi: "marketing & nội dung"
  }
];
