import { getPostBySlug, getPostSlugs } from '@/lib/post';
import { notFound } from 'next/navigation';
import { Container } from "@/components/Container";
import { BlogPostStructuredData } from "@/components/StructuredData";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

type Params = {
  params: { slug: string; locale: string };
};

export async function generateStaticParams(): Promise<{ slug: string; locale: string }[]> {
  const slugs = getPostSlugs(); // Now returns actual slugs from frontmatter
  const locales = ['en', 'vi'];
  
  return slugs.flatMap((slug) =>
    locales.map((locale) => ({
      slug, // No need to remove .md since getPostSlugs now returns clean slugs
      locale,
    }))
  );
}

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  const post = await getPostBySlug(params.slug, locale);
  
  if (!post) {
    const translations = {
      en: {
        title: "Post Not Found",
        description: "The requested blog post could not be found."
      },
      vi: {
        title: "Không tìm thấy bài viết",
        description: "Không thể tìm thấy bài viết blog được yêu cầu."
      }
    };
    
    const t = translations[locale as keyof typeof translations] || translations.en;
    return {
      title: t.title,
      description: t.description
    };
  }

  const url = `https://thielts.com/${locale}/blog/${params.slug}`;

  return {
    title: `${post.title} | Thi Nguyen`,
    description: post.quote || post.title,
    keywords: ["Thi Nguyen blog", post.category, "business insights", "automation", "consulting", "SME"],
    authors: [{ name: "Thi Nguyen", url: "https://thielts.com" }],
    publishedTime: post.date,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url: url,
      title: post.title,
      description: post.quote || post.title,
      publishedTime: post.date,
      authors: ["Thi Nguyen"],
      section: post.category || "Business",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.quote || post.title,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CasePage({ params }: Params) {
  const locale = params.locale;
  const post = await getPostBySlug(params.slug, locale);

  if (!post) return notFound();

  const url = `https://thielts.com/${locale}/blog/${params.slug}`;

  // Bilingual content
  const content = {
    en: {
      backToAllPosts: "← back to all posts",
      writtenIn: "written in",
      readingTime: "reading time",
      keyInsight: "key insight",
      author: "author",
      expertContributor: "expert contributor",
      tagline: "insights from real conversations and real problems",
      whatDoYouThink: "what do you think?",
      cta: {
        p1: "this article might've started as a scribble on the back of a receipt during a bus ride, a spark of something real after a conversation over a pint of leffe, or notes from a sunday afternoon client call that left me buzzing with ideas. however it came to be, i hope it found you at just the right moment.",
        p2: "if it stirred something in you, or if you're just curious about anything from automating the boring bits of your business to capturing your quiet magic in a coffee shop shoot. shall we pencil something into the diary?",
        p3: "i'd love to be on the other end of the conversation."
      }
    },
    vi: {
      backToAllPosts: "← về tất cả bài viết",
      writtenIn: "viết vào",
      readingTime: "thời gian đọc",
      keyInsight: "điểm nhấn chính",
      author: "tác giả",
      expertContributor: "chuyên gia đóng góp",
      tagline: "những hiểu biết từ các cuộc trò chuyện thực tế và những vấn đề thực tế",
      whatDoYouThink: "bạn nghĩ sao?",
      cta: {
        p1: "bài viết này có thể bắt đầu như một ghi chú nguệch ngoạc trên mặt sau của tờ hóa đơn trong chuyến xe buýt, một tia sáng từ cuộc trò chuyện với ly bia leffe, hoặc những ghi chú từ cuộc gọi khách hàng chiều chủ nhật khiến mình đầy ý tưởng. dù nó đến như thế nào, mình hy vọng nó tìm đến bạn đúng lúc.",
        p2: "nếu nó khuấy động điều gì đó trong bạn, hoặc nếu bạn chỉ tò mò về việc tự động hóa những phần nhàm chán trong công việc đến việc ghi lại khoảnh khắc tĩnh lặng của bạn trong buổi chụp ở quán cà phê. chúng ta có thể sắp xếp gặp nhau không?",
        p3: "mình rất muốn ở phía bên kia cuộc trò chuyện."
      }
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <SmoothScrollProvider>
      <BlogPostStructuredData
        title={post.title}
        description={post.quote || post.title}
        datePublished={post.date || new Date().toISOString()}
        url={url}
      />
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              {post.category || 'insights'}
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              {post.title.toLowerCase()}
            </h1>
            <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-12 mb-12">
              <div className="text-center">
                <a href={`/${locale}/blog`} className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  {t.backToAllPosts}
                </a>
              </div>
              
              <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <div className="block lg:hidden text-gray-300 dark:text-gray-600">|</div>
              
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm mb-1">{t.writtenIn}</p>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  {post.date ? new Date(post.date).getFullYear() : '2024'}
                </span>
              </div>
              
              <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <div className="block lg:hidden text-gray-300 dark:text-gray-600">|</div>
              
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm mb-1">{t.readingTime}</p>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  {post.readingTime || '5'} min
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <Container className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Post Meta */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              {post.quote && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.keyInsight}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                    "{post.quote.toLowerCase()}"
                  </p>
                </div>
              )}
              
              {post.client && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.author}</h3>
                  <div className="space-y-1">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {post.client.name} {post.client.age}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{post.client.job}</p>
                  </div>
                </div>
              )}

              {post.expert && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.expertContributor}</h3>
                  <div className="space-y-1">
                    <p className="text-gray-900 dark:text-white font-medium">{post.expert.name}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{post.expert.title}</p>
                  </div>
                </div>
              )}
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                  "{t.tagline}"
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Article Content */}
          <div className="lg:w-2/3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none text-left"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 p-8 bg-gray-50 dark:bg-neutral-800 rounded-sm border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t.whatDoYouThink}</h3>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-3">
                  <p>{t.cta.p1}</p>
                  <p>{t.cta.p2}</p>
                  <p>{t.cta.p3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SmoothScrollProvider>
  );
}