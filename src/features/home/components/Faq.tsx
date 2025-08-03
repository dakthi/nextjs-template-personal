"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/components/common/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Category = "general" | "services" | "workflow" | "businesses";

const faqContent: Record<Category, { question: string; answer: string }[]> = {
  general: [
    { question: "aren't you specialised in anything?", answer: "i had decent understanding of a wide breadth of specialties, good enough to power a multi‑million start‑up team, but not enough to be a specialist in a corporate. like a swiss army knife, if that makes sense!" },
    { question: "how did you learn all this stuff?", answer: "honestly? youtube, google, and a lot of trial and error. plus asking way too many questions to anyone who'd listen. i'm naturally curious and don't mind looking stupid while learning something new." },
    { question: "do you work remotely or on-site?", answer: "both, depending on what makes sense. for automation projects, i usually need to be there initially to understand the workflow. for web development or consulting, remote works perfectly fine." },
    { question: "what's your typical turnaround time?", answer: "depends on the project, but i'm pretty quick. simple websites or automation scripts can be done in a few days. more complex stuff might take a few weeks. i'll give you a realistic timeline upfront." }
  ],
  services: [
    { question: "what services do you offer then?", answer: "project‑based consultancy on marketing, ai and automation. i also make fully functioning full‑stack websites, take beautiful photography of your events and teach english." },
    { question: "can you help with social media management?", answer: "i don't do the day-to-day posting, but i can set up systems that make it way easier. think automated content scheduling, analytics dashboards, or tools that help you batch create content more efficiently." },
    { question: "do you offer ongoing support or just one-time projects?", answer: "mostly one-time projects, but i'm happy to help with maintenance or updates if needed. i prefer to build things that don't need much babysitting, though." },
    { question: "what programming languages do you use?", answer: "mainly javascript/typescript for web stuff, python for automation and data work. i pick whatever tool makes the most sense for your specific problem rather than forcing everything into one language." },
    { question: "can you integrate with our existing systems?", answer: "probably, yeah. i've worked with most common business software - crms, accounting systems, e-commerce platforms. if it has an api or can export data, we can usually make it play nice with other tools." }
  ],
  workflow: [
    { question: "let's be more specific, how would you help me if i have a business?", answer: "i'll go into your business as an intern by morning, doing things your team does. by evening, you would be presented with a full‑stack solution that automates or speeds up 60–80% of your workflow." },
    { question: "what if we don't know what needs automating?", answer: "that's usually where i start - watching what you do and asking 'why are you doing this manually?' most people are so used to their workflows they don't see the inefficiencies anymore." },
    { question: "how do you ensure the automation doesn't break our existing processes?", answer: "i test everything thoroughly and usually build in fallbacks. plus i document everything so your team knows exactly how it works. no black box solutions that leave you helpless if something goes wrong." },
    { question: "what happens if our needs change after automation is set up?", answer: "i build things to be flexible when possible. but honestly, if your needs change dramatically, you might need updates. i try to anticipate this and make systems modular so we can adjust pieces without rebuilding everything." },
    { question: "can you train our team to manage the automated systems?", answer: "absolutely. in fact, i prefer it that way. i'll create documentation, record training videos, and walk your team through everything. the goal is to make you independent, not dependent on me." }
  ],
  businesses: [
    { question: "what kind of businesses are you interested in working with?", answer: "the boring ones. i mean, mom‑and‑pop shops, brick‑and‑mortar businesses: the ones with years of reputation and experience, but without the tech to match. i love bringing in automation, ai, and smarter workflows to emulsify that deep stack of expertise you've simmered for years. think of it as giving your business a michelin‑star upgrade, without losing the original flavor." },
    { question: "do you work with startups or just established businesses?", answer: "i love working with established businesses that have proven models but need tech upgrades. startups are fun but they're usually trying to figure out their processes, not automate them." },
    { question: "what size businesses do you typically work with?", answer: "anywhere from solo entrepreneurs to companies with 50-100 employees. big enough to have real problems worth solving, small enough that i can actually understand the whole operation." },
    { question: "do you have experience in my industry?", answer: "maybe, maybe not. but good processes are good processes regardless of industry. plus, sometimes an outside perspective catches things that industry veterans miss because they're too close to the problem." },
    { question: "what if our budget is limited?", answer: "let's talk about it. i'm more interested in solving interesting problems than maximizing revenue. we can often start small with the biggest pain point and expand from there as you see results." },
    { question: "how do you handle confidentiality and data security?", answer: "very seriously. i'll sign whatever ndas you need, and i follow security best practices. your data stays your data - i don't keep copies or use your info for anything else." }
  ]
};

const categories: { key: Category; label: string }[] = [
  { key: "general", label: "general" },
  { key: "services", label: "services" },
  { key: "workflow", label: "workflow" },
  { key: "businesses", label: "businesses" }
];

export const Faq = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("general");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeIndex = categories.findIndex(c => c.key === activeCategory);

  const handleCategoryChange = (newCategory: Category) => {
    if (newCategory === activeCategory) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(newCategory);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + categories.length) % categories.length;
    handleCategoryChange(categories[newIndex].key);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % categories.length;
    handleCategoryChange(categories[newIndex].key);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full mb-4">
              questions & answers
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6 leading-relaxed">
              things you might be wondering about
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              honest answers to the questions that come up most often. if you don't see what you're looking for, just ask.
            </p>
          </div>

          {/* Mobile Carousel Selector */}
          <div className="mb-8 block lg:hidden">
            <div className="flex items-center justify-center space-x-6">
              <button 
                onClick={handlePrev} 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 active:scale-95"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
              </button>
              <div className="relative min-w-[120px] h-8 flex items-center justify-center">
                <span 
                  className={`absolute text-gray-800 font-medium text-lg text-center transition-all duration-300 ${
                    isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  {categories[activeIndex].label}
                </span>
              </div>
              <button 
                onClick={handleNext} 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 active:scale-95"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <p className="text-center text-gray-500 text-xs italic mt-2">
              "the best questions are the ones that make you think differently"
            </p>
          </div>

          {/* Desktop Horizontal Selector */}
          <div className="hidden lg:flex items-center justify-center mb-8">
            <div className="relative">
              <div className="flex bg-gray-100 rounded-full p-1 overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => handleCategoryChange(cat.key)}
                    className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeCategory === cat.key ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            <div className={`space-y-4 transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              {faqContent[activeCategory].map((item, index) => (
                <Disclosure key={`${activeCategory}-${index}`} as="div">
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-sm overflow-hidden transform transition-all duration-200 hover:shadow-md">
                      <DisclosureButton className="flex items-center justify-between w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
                        <span className="text-gray-900 font-medium">{item.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </DisclosureButton>
                      <DisclosurePanel className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
