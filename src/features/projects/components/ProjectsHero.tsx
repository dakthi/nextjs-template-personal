import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";

export const ProjectsHero = () => {
  return (
    <Container className="flex flex-wrap items-center pt-8 md:pt-16">
      <div className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full mb-4">
            things i&apos;ve built
          </div>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6 leading-relaxed">
            hey there: here are some projects i&apos;ve put together over the years
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            a mix of client work, personal experiments, and solutions to problems i&apos;ve encountered along the way. 
            dive in and see if any of it resonates with what you&apos;re working on
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 mb-12">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">built with</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">React</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Next.js</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Python</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-gray-300"></div>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">areas i&apos;ve explored</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">automation</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">finance</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">education</span>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">web apps</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};