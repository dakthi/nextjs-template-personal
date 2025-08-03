import { Container } from "@/components/Container";
import { Faq } from "@/components/Faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about my services, process, and approach to projects. Common questions about automation consulting and full-stack development.",
  keywords: ["FAQ", "frequently asked questions", "automation consulting", "services", "process"],
  alternates: {
    canonical: "https://thineuyen.com/faq",
  },
  openGraph: {
    type: "website",
    url: "https://thineuyen.com/faq",
    title: "FAQ - Frequently Asked Questions",
    description: "Frequently asked questions about my services, process, and approach to projects.",
  },
};

export default function FaqPage() {
  return (
    <>
      <Faq />
      
      {/* Additional Resources Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-neutral-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Still Have Questions */}
            <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">still have questions?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    every project is unique, so these might not cover everything you're wondering about.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">quick response</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    i usually reply within a few hours, often faster. no pressure, no sales pitch: just honest answers.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    "there are no stupid questions, only stupid answers"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Action Items */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">ask me directly</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    the fastest way to get answers tailored to your specific situation.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    send a message
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">see examples</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    sometimes it's easier to understand through concrete examples of past work.
                  </p>
                  <a
                    href="/projects"
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    browse projects
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">read testimonials</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    hear what other clients say about the experience of working together.
                  </p>
                  <a
                    href="/testimonials"
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    client feedback
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">explore learning</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    if you're curious about doing some of this yourself, check out what i teach.
                  </p>
                  <a
                    href="/learn"
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
                  >
                    learning resources
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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