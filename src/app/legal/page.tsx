import { Container } from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal information and terms of service for Thi Nguyen's consulting and development services.",
  keywords: ["legal", "terms of service", "terms and conditions"],
  alternates: {
    canonical: "https://thineuyen.com/legal",
  },
  openGraph: {
    type: "website",
    url: "https://thineuyen.com/legal",
    title: "Legal - Terms of Service",
    description: "Legal information and terms of service for consulting and development services.",
  },
};

export default function LegalPage() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              legal stuff
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              the boring but necessary bits
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              straightforward terms and legal information. no hidden clauses or confusing language.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 prose prose-lg dark:prose-invert max-w-none">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">terms of service</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    by using this website or engaging my services, you agree to these terms. they're pretty straightforward.
                  </p>
                  <p>
                    <strong>services:</strong> i provide consulting, automation, web development, and related services. what we agree on is what you get.
                  </p>
                  <p>
                    <strong>payment:</strong> payment terms will be discussed upfront. typically 50% deposit, 50% on completion for projects under £5000.
                  </p>
                  <p>
                    <strong>intellectual property:</strong> you own what i create for you after full payment. i retain the right to showcase the work in my portfolio.
                  </p>
                  <p>
                    <strong>liability:</strong> i'll do my best work, but i can't guarantee specific business outcomes. my liability is limited to the amount you paid me.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">cancellation policy</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    either party can cancel with reasonable notice. if you cancel mid-project, you pay for work completed. if i cancel (rare, but life happens), you get a full refund of any unused deposit.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">disputes</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    let's talk it out first. if that doesn't work, we'll follow uk law and resolve things in london courts.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">contact</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    questions about these terms? <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">drop me a line</Link>.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}