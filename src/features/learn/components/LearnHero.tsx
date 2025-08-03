import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import Image from "next/image";

export const LearnHero = () => {
  return (
    <Container className="flex flex-wrap items-center py-8 sm:py-12 md:py-16">
      <div className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full mb-4">
            things i&apos;ve learned (and can share)
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-4 sm:mb-6 leading-relaxed">
            some courses i put together from stuff i&apos;ve figured out along the way
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            mostly things i wish someone had told me earlier. no fluff, no theory for theory&apos;s sake: 
            just practical knowledge from someone who&apos;s been there and made the mistakes already.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 mb-8 sm:mb-12 px-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">what you&apos;ll find</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">short lessons</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">real examples</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">immediate use</span>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-gray-300"></div>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">subjects covered</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">web development</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">finance basics</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">business skills</span>
            </div>
          </div>
        </div>

        <div className="text-center px-4">
          <p className="text-gray-500 text-sm italic mb-4 sm:mb-6">
            &quot;if you&apos;re here to actually learn something, not just collect certificates, you&apos;re in the right place&quot;
          </p>
          <p className="text-gray-400 text-xs">
            take what&apos;s useful, skip what isn&apos;t
          </p>
        </div>
      </div>
    </Container>
  );
};