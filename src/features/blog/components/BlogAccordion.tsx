import { Container } from "@/components/common/Container";

const blogPosts = [
  {
    title: "from teacher to builder",
    excerpt: "how i went from teaching english to building full-stack applications",
    category: "career"
  },
  {
    title: "my first problem solved",
    excerpt: "the moment i realized technology could amplify human potential",
    category: "tech"
  },
  {
    title: "university to me",
    excerpt: "what formal education taught me vs what i actually needed",
    category: "learning"
  },
  {
    title: "how to learn effortlessly",
    excerpt: "the system i use to master new skills quickly",
    category: "learning"
  },
  {
    title: "dealmaking 101",
    excerpt: "lessons learned from negotiating in different cultures",
    category: "business"
  },
  {
    title: "teacher to builder mindset",
    excerpt: "applying teaching principles to software development",
    category: "career"
  },
  {
    title: "automation ethics",
    excerpt: "keeping humanity in an automated world",
    category: "tech"
  },
  {
    title: "learning in public",
    excerpt: "why documenting your journey matters",
    category: "learning"
  }
];

export const BlogAccordion = () => {
  return (
    <div className="w-full mb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Introduction */}
          <div className="lg:pr-8">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-white text-sm px-3 py-1 rounded-full mb-4 shadow-lg shadow-black/10 dark:shadow-black/20">
              thoughts & reflections
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal tracking-wide text-black dark:text-white mb-6 leading-relaxed">
              is she real?
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 dark:font-medium leading-relaxed">
                a celta-certified teacher, an acca-part-qualified accountant, a social media manager, a marketer who knows how to automate things using python, selenium, pandas and can develop and deploy a full-stack website like the one you're looking at.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 dark:font-medium leading-relaxed">
                yes, she is - that's the whole point of this website! dive into my thoughts and see the journey from teacher to builder, the messy growth, and the little emotional chaos left behind when you think way too much about everything.
              </p>
            </div>
            <div>
              <a
                href="/blog"
                className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-sm hover:shadow-lg hover:shadow-black/20 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200 dark:font-medium shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                read all my thoughts
              </a>
            </div>
          </div>

          {/* Right Column - Scrollable Blog Posts */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold tracking-wide text-black dark:text-white mb-6">
              latest reflections
            </h3>
            <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={`/blog/${post.title.replace(/\s+/g, '-')}`}
                  className="block bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-sm p-4 hover:shadow-lg hover:shadow-black/20 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-black/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold tracking-wide text-black dark:text-white text-sm leading-tight">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-white ml-2 flex-shrink-0">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs dark:font-medium leading-relaxed">
                    {post.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};