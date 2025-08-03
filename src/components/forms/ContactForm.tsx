"use client";

import { Container } from "@/components/common/Container";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add actual form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for reaching out! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
      });
    }, 2000);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
              get in touch
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
              let's have a chat
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              got a project in mind? curious about automation? just want to say hello? drop me a line.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">ways to reach me</h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      <span className="font-medium">email:</span>
                      <br />
                      <a href="mailto:dakthi9@gmail.com" className="hover:text-gray-900 dark:hover:text-white">
                        dakthi9@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">location:</span>
                      <br />
                      london, uk
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">typical response time</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    i usually respond within 24 hours, often much faster. if it's urgent, mention it in the subject line.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    "the best conversations start with hello"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                      placeholder="your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                      placeholder="your company (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      budget range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                    >
                      <option value="">select range (optional)</option>
                      <option value="under-1k">under £1,000</option>
                      <option value="1k-5k">£1,000 - £5,000</option>
                      <option value="5k-10k">£5,000 - £10,000</option>
                      <option value="10k-plus">£10,000+</option>
                      <option value="not-sure">not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors"
                    placeholder="what's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 transition-colors resize-vertical"
                    placeholder="tell me about your project, question, or just say hello..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "sending..." : "send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}