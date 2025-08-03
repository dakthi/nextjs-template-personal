import { Container } from "@/components/Container";
import { Testimonials } from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What people say about working with me - real feedback from real projects. Client testimonials for automation consulting and full-stack development services.",
  keywords: ["testimonials", "client feedback", "automation consultant reviews", "full-stack developer testimonials"],
  alternates: {
    canonical: "https://thineuyen.com/testimonials",
  },
  openGraph: {
    type: "website",
    url: "https://thineuyen.com/testimonials",
    title: "Testimonials - Client Feedback",
    description: "What people say about working with me - real feedback from real projects.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              client feedback
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              what people say about working with me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              real feedback from real projects. no fake reviews, no cherry-picking: just honest thoughts from people i've worked with.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 mb-12">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">project types</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">automation</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">web development</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">consulting</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">training</span>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">client industries</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">retail</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">professional services</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">hospitality</span>
                <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">education</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Testimonials Component */}
      <Container className="mb-20">
        <Testimonials />
      </Container>

      {/* Additional Context Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Why Testimonials Matter */}
            <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">why i share these</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    because anyone can write impressive copy on their website. what matters is what people actually think after working together.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">how i work</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                    every project starts with understanding your actual problem, not just what you think you need.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    i document everything, explain my thinking, and make sure you can manage things without me when we're done.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    "good work speaks for itself, but sometimes it needs a microphone"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Call to Action */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-neutral-800 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  ready to add your testimonial?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  every project is different, but they all start with a conversation. tell me about your challenge and let's see if we're a good fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    start a conversation
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                  >
                    see my work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}