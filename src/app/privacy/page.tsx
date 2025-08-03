import { Container } from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling information for Thi Nguyen's website and services. Learn how your information is collected, used, and protected.",
  keywords: ["privacy policy", "data protection", "GDPR", "information security"],
  alternates: {
    canonical: "https://thineuyen.com/privacy",
  },
  openGraph: {
    type: "website",
    url: "https://thineuyen.com/privacy",
    title: "Privacy Policy - Data Protection Information",
    description: "Privacy policy and data handling information for Thi Nguyen's website and services.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              privacy policy
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              how i handle your information
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              i respect your privacy. here's exactly what i do (and don't do) with your data.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 prose prose-lg dark:prose-invert max-w-none">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">what information i collect</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    <strong>contact information:</strong> when you reach out, i collect your name, email, and any other details you share.
                  </p>
                  <p>
                    <strong>website analytics:</strong> basic stuff like page views and how you found me. nothing personally identifiable.
                  </p>
                  <p>
                    <strong>project information:</strong> if we work together, i'll have access to whatever you share for the project.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">how i use your information</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    <strong>communication:</strong> to respond to your messages and discuss potential projects.
                  </p>
                  <p>
                    <strong>service delivery:</strong> to complete the work you've hired me for.
                  </p>
                  <p>
                    <strong>improvement:</strong> to make this website better (but not in a creepy way).
                  </p>
                  <p>
                    i don't sell your information. i don't spam you. i don't share your data with anyone unless you ask me to or i'm legally required to.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">data security</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    i use standard security practices to protect your information. everything's encrypted in transit and at rest where possible.
                  </p>
                  <p>
                    that said, no system is 100% secure. i'll do my best, but can't guarantee absolute security.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">your rights</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    you can ask me what information i have about you, request corrections, or ask me to delete it. just <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">get in touch</Link>.
                  </p>
                  <p>
                    if you're in the eu, you have additional rights under gdpr. if you're elsewhere, i'll still treat you fairly.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">cookies</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    this site uses minimal cookies for basic functionality. no tracking, no advertising, no nonsense.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">changes to this policy</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    if i update this policy, i'll put the new version here with a new date. major changes will be communicated directly.
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