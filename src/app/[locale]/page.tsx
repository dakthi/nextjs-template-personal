import { type Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  const translations = {
    en: {
      title: "Lieu Vo - Digital Creator & Accountant",
      description:
        "Lieu Vo, accountant living and working in London, UK. Sharing tax knowledge and helping people understand practical tax applications.",
      keywords: [
        "Lieu Vo",
        "UK accountant",
        "tax expert",
        "London",
        "digital creator",
        "tax knowledge",
        "self-employed",
        "limited company",
      ],
    },
    vi: {
      title: "Lieu Vo - Kế toán viên & Digital Creator",
      description:
        "Lieu Vo, kế toán viên đang sinh sống và làm việc tại London, UK. Chia sẻ kiến thức về thuế và giúp mọi người hiểu về ứng dụng thuế thực tế.",
      keywords: [
        "Lieu Vo",
        "kế toán UK",
        "chuyên gia thuế",
        "London",
        "digital creator",
        "kiến thức thuế",
        "tự kinh doanh",
        "công ty hữu hạn",
      ],
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://thielts.com/${locale}`,
    },
    openGraph: {
      type: "website",
      url: `https://thielts.com/${locale}`,
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage({ params }: Props) {
  const profileData = {
    name: "Lieu Vo",
    followers: "6.2K followers • 0 following",
    title: "Digital creator",
    location: "Lives in London, United Kingdom",
    introduction:
      "Xin chào! Mình là Liệu, một kế toán viên đang sinh sống và làm việc tại UK 🇬🇧",
    description:
      "Để hiểu hơn về hành trình theo đuổi nghề kế toán của Liệu, bạn hãy ghé đọc bài viết này nhé: https://www.facebook.com/share/p/128iSWrHDfX/?mibextid=wwXIfr",
    mission:
      "Năm 2024, Liệu bắt đầu chia sẻ những kiến thức về thuế trên Facebook với mong muốn giúp mọi người hiểu rõ hơn và có thể áp dụng vào thực tế cuộc sống.",
    gratitude:
      "Cảm ơn mọi người đã dành thời gian theo dõi và ủng hộ những bài viết của mình ❤️. Liệu rất trân trọng cơ hội được kết nối, chia sẻ và đồng hành cùng mọi người. Nếu có bất kỳ thắc mắc hay chủ đề nào bạn muốn tìm hiểu thêm, đừng ngần ngại để lại bình luận cho Liệu biết nhé!",
    wishes: "Chúc cả nhà một năm mới bình an, hạnh phúc và thành công!",
    articles: [
      { title: "Tại sao lại phải đóng thuế, thuế được sử dụng cho mục đích gì", url: "https://www.facebook.com/share/p/1E6FrDxPyg/?mibextid=wwXIfr" },
      { title: "Mới bắt đầu kinh doanh, nên chọn self-employed hay limited company", url: "https://www.facebook.com/share/p/15LPG2cQdT/?mibextid=wwXIfr" },
      { title: "Lần đầu làm chủ công ty, cần biết những loại thuế gì", url: "https://www.facebook.com/share/p/19RSHwbvgv/?mibextid=wwXIfr" },
      { title: "Bí quyết sử dụng dịch vụ kế toán hiệu quả", url: "https://www.facebook.com/share/p/16BUiXNpyq/?mibextid=wwXIfr" },
      { title: "Đừng chỉ tin kế toán, hãy hiểu doanh nghiệp của mình", url: "https://www.facebook.com/share/p/17gxaoARjs/?mibextid=wwXIfr" },
      { title: "Nhân viên cần kiểm tra những thông tin gì trên bảng lương", url: "https://www.facebook.com/share/v/18DBgZw2Tq/?mibextid=wwXIfr" },
      { title: "Thuế thu nhập cá nhân Income tax được tính như nào", url: "https://www.facebook.com/share/p/14u7KMQFTP/?mibextid=wwXIfr" },
      { title: "Thu nhập cao có nên claim Child Benefit không", url: "https://www.facebook.com/share/p/18nrigSKK3/?mibextid=wwXIfr" },
      { title: "Hiểu đúng về thuế bảo hiểm quốc gia NIC, cách tính thuế NI của nhân viên", url: "https://www.facebook.com/share/p/15SYXsVwVx/?mibextid=wwXIfr" },
      { title: "Cách tính thuế bảo hiểm quốc gia NIC của người chủ, đừng bỏ lỡ £5000 miễn thuế", url: "https://www.facebook.com/share/p/18VzkLtdHu/?mibextid=wwXIfr" },
      { title: "Hệ thống lương hưu ở UK, cách tính lương hưu và claim tax relief", url: "https://www.facebook.com/share/p/15YcWB2ScX/?mibextid=wwXIfr" },
      { title: "Đóng ít thuế hợp pháp, thu nhập cho thuê nhà", url: "https://www.facebook.com/share/p/19yS5gUuHQ/?mibextid=wwXIfr" },
      { title: "Tin buồn cho những ai mua nhà năm 2025: những thay đổi về thuế đất SDLT", url: "https://www.facebook.com/share/p/15TY6HRufj/?mibextid=wwXIfr" },
      { title: "Thuế đất SDLT bất ngờ tăng cho người mua nhà thứ hai: Áp Dụng Ngay Từ 31/10/2024 Sau Autumn Budget", url: "https://www.facebook.com/share/p/18pFPufYH5/?mibextid=wwXIfr" },
      { title: "Bộ thuế không phải lúc nào cũng đúng", url: "https://www.facebook.com/share/p/15ukmP2AKV/?mibextid=wwXIfr" },
      { title: "HMRC sẽ làm gì nếu phát hiện bạn không khai báo hoặc khai báo thuế không trung thực", url: "https://www.facebook.com/share/p/1DxoaHezhH/?mibextid=wwXIfr" },
      { title: "Những điều thú vị về mã số thuế UTR cá nhân", url: "https://www.facebook.com/share/p/15bz4DSEhs/?mibextid=wwXIfr" },
      { title: "HMRC có những khoản phạt nào", url: "https://www.facebook.com/share/p/14aXKJKdEG/?mibextid=wwXIfr" },
      { title: "Nộp tờ khai thuế self-assessment muộn, mức phạt và cách kháng cáo", url: "https://www.facebook.com/share/p/15eFD65U3S/?mibextid=wwXIfr" },
      { title: "Rời khỏi UK, cách lấy lại tiền thuế đã đóng", url: "https://www.facebook.com/share/p/18ZkpPS8BJ/?mibextid=wwXIfr" },
      { title: "Trợ cấp thai sản qua công ty Statutory Maternity Allowance (SMP)", url: "https://www.facebook.com/share/p/1BiN2TrWWK/?mibextid=wwXIfr" },
      { title: "Trợ cấp thai sản không qua công ty Maternity Allowance", url: "https://www.facebook.com/share/p/1BA6Tkhu74/?mibextid=wwXIfr" },
      { title: "Video hướng dẫn điền form xin trợ cấp thai sản Maternity Allowance", url: "https://www.facebook.com/share/v/15MCpRgvee/?mibextid=wwXIfr" },
    ],
  };

  return (
    <main className="min-h-screen bg-pink-50 dark:bg-neutral-900 font-sans tracking-wide">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Side by Side Layout on XL */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="/img/lieu-1.jpg"
                alt="Lieu Vo"
                className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-pink-200"
              />
              <div className="text-center space-y-1">
                <h1 className="text-4xl font-bold text-pink-700">{profileData.name}</h1>
                <p className="text-gray-500 italic">{profileData.followers}</p>
                <p className="text-xl text-pink-500">{profileData.title}</p>
                <p className="text-gray-400">{profileData.location}</p>
              </div>
            </div>
            {/* Floating Gallery */}
            <div className="grid grid-cols-5 gap-2 mt-8">
              {[2, 3, 4, 5, 6].map((num, i) => (
                <img
                  key={i}
                  src={`/img/lieu-${num}.jpg`}
                  alt={`Lieu Vo photo ${num}`}
                  className="w-full h-20 object-cover rounded-lg shadow-md transform hover:rotate-3 hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Intro Section */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex flex-col gap-6">
              <img
                src="/img/lieu-2.jpg"
                alt="Lieu Vo at work"
                className="rounded-xl object-cover shadow-lg border border-pink-200"
              />
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <h2 className="text-3xl font-bold text-pink-700 underline decoration-wavy">
                  Giới thiệu
                </h2>
                <p>{profileData.introduction}</p>
                <p>{profileData.description}</p>
                <p>{profileData.mission}</p>
                <p>{profileData.gratitude}</p>
                <p className="font-semibold text-pink-600">{profileData.wishes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Polaroid Style Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/img/lieu-3.jpg"
            alt="Lieu Vo professional"
            className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform"
          />
          <img
            src="/img/lieu-4.jpg"
            alt="Lieu Vo consulting"
            className="rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform"
          />
        </div>

        {/* Articles */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">Bài viết của Liệu</h2>
          <div className="space-y-4">
            {profileData.articles.map((article, i) => (
              <div
                key={i}
                className="pl-4 border-l-4 border-pink-300 hover:bg-pink-50 dark:hover:bg-neutral-700 transition rounded"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  {article.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-4 text-gray-500 italic">
          © 2025 Lieu Vo. All rights reserved.
        </div>
      </div>
    </main>
  );
}
