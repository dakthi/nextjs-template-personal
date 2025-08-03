import Image from "next/image";
import { Container } from "@/components/common/Container";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container className="flex flex-wrap xl:mt-14">
        
        {/* IMAGE FIRST ON MOBILE, SECOND ON DESKTOP */}
<div className="order-first lg:order-last flex w-full lg:w-1/2 p-5 xl:p-0">
  <div className="relative w-full h-64 lg:h-full flex items-stretch">
    <div className="w-full h-full rounded-xl shadow-xl shadow-black/30 dark:shadow-black/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Image
        src="/img/hero.png"
        alt="Hero Illustration"
        fill
        className="object-cover"
        quality={100}
        priority
      />
    </div>
  </div>
</div>

        {/* TEXT SECOND ON MOBILE, FIRST ON DESKTOP */}
        <div className="order-last lg:order-first flex items-center w-full lg:w-1/2 pl-5 pr-5 xl:pl-0 xl:pr-0">
          <div className="max-w-xl">
            <h1 className="text-xl font-normal leading-snug tracking-wide text-black dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              the gal who wears many hats
            </h1>
            <p className="mt-2 mb-2 xl:py-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300 dark:font-medium lg:text-xl xl:text-xl xl:mt-5 xl:mb-5 xl:pr-0">
              most <em>accountants</em> account. i account - but i also automate
              80% of it, standardise the workflow, create training videos for
              onboarding, and then use that to close clients (then proceed to
              close the client too)
            </p>
            <p className="mt-2 mb-2 xl:py-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300 dark:font-medium lg:text-xl xl:text-xl xl:mt-5 xl:mb-5 pr-5 xl:pr-0">
              most <em>teachers</em> teach. i do <em>more</em>.
              <br />
              most <em>marketers</em> run ads. i do <em>more</em>.
              <br />
              whatever <em>you</em> need. i do <em>more</em>
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-6">
              <a
                href="/blog"
                className="bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:border-gray-500 dark:hover:border-gray-400 hover:shadow-lg hover:shadow-black/20 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-sm transition-all duration-200 dark:font-medium shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                find out if i'm real
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
