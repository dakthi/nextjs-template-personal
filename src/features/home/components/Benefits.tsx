import React from "react";
import { Container } from "@/components/common/Container";
import { benefits, BenefitSection as BenefitSectionType } from "@/features/home/data/benefits.config";

export const Benefits = () => {
  return (
    <>
      {benefits.map((benefit, index) => (
        <BenefitSection key={index} data={benefit} />
      ))}
    </>
  );
};

interface BenefitSectionProps {
  data: BenefitSectionType;
}

function BenefitSection({ data }: BenefitSectionProps) {
  return (
    <section className="w-full pt-6 pb-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal tracking-wide text-black dark:text-white leading-tight">
            {data.title}
          </h2>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {data.desc}
            </p>
            <a
              href="/projects"
              className="inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 group"
            >
              See my work
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {data.bullets.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-6 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300 hover:scale-105 hover:z-10 hover:ring-1 hover:ring-gray-400 min-w-[280px] snap-center"
              >
                <div className="mb-6 flex items-center justify-center">
                  <item.icon className="w-20 h-20 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex justify-end">
                  <button className="w-8 h-8 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500 hover:shadow-lg hover:shadow-black/20 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                    <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {data.bullets.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {data.bullets.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-6 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300 hover:scale-105 hover:z-10 hover:ring-1 hover:ring-gray-400"
            >
              <div className="mb-6 flex items-center justify-center">
                <item.icon className="w-20 h-20 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-6 flex justify-end">
                <button className="w-8 h-8 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500 hover:shadow-lg hover:shadow-black/20 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                  <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
