"use client";

import { Container } from "@/components/Container";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface ContactFormProps {
  locale?: string;
}

export function ContactForm({ locale: propLocale }: ContactFormProps = {}) {
  const pathname = usePathname();
  const locale = propLocale || (pathname?.startsWith("/vi") ? "vi" : "en");

  const translations = {
    en: {
      tag: "get in touch",
      heading: "let's have a chat",
      description:
        "got a project in mind? curious about automation? just want to say hello? drop me a line.",
      contactTitle: "ways to reach me",
      email: "email",
      location: "location",
      locationValue: "london, uk",
      responseTitle: "typical response time",
      responseText:
        "i usually respond within 24 hours, often much faster. if it's urgent, mention it in the subject line.",
      quote: `"the best conversations start with hello"`,
      name: "name *",
      namePlaceholder: "your name",
      emailLabel: "email *",
      emailPlaceholder: "your@email.com",
      company: "company",
      companyPlaceholder: "your company (optional)",
      budget: "budget range",
      budgetOptions: [
        "select range (optional)",
        "under £1,000",
        "£1,000 - £5,000",
        "£5,000 - £10,000",
        "£10,000+",
        "not sure yet",
      ],
      subject: "subject *",
      subjectPlaceholder: "what's this about?",
      message: "message *",
      messagePlaceholder:
        "tell me about your project, question, or just say hello...",
      send: "send message",
      sending: "sending...",
    },
    vi: {
      tag: "liên hệ",
      heading: "cùng trò chuyện nhé",
      description:
        "có dự án trong đầu? tò mò về tự động hoá? hay chỉ muốn chào hỏi? cứ để lại lời nhắn.",
      contactTitle: "cách liên hệ với thi",
      email: "email",
      location: "địa điểm",
      locationValue: "london, anh quốc",
      responseTitle: "thời gian phản hồi",
      responseText:
        "thi thường trả lời trong 24 giờ, thường là nhanh hơn. nếu gấp, ghi rõ trong tiêu đề nhé.",
      quote: `"những cuộc trò chuyện hay nhất bắt đầu bằng lời chào"`,
      name: "tên *",
      namePlaceholder: "tên của bạn",
      emailLabel: "email *",
      emailPlaceholder: "ban@email.com",
      company: "công ty",
      companyPlaceholder: "công ty của bạn (không bắt buộc)",
      budget: "ngân sách dự kiến",
      budgetOptions: [
        "chọn khoảng (không bắt buộc)",
        "dưới £1,000",
        "£1,000 - £5,000",
        "£5,000 - £10,000",
        "£10,000+",
        "chưa chắc",
      ],
      subject: "tiêu đề *",
      subjectPlaceholder: "chủ đề của lời nhắn?",
      message: "lời nhắn *",
      messagePlaceholder: "kể cho thi về dự án hoặc câu hỏi của bạn...",
      send: "gửi lời nhắn",
      sending: "đang gửi...",
    },
  };

  const t = translations[locale as "en" | "vi"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert(locale === "vi" ? "Cảm ơn bạn đã liên hệ!" : "Thanks for reaching out!");
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
    <section className="w-full bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <Container className="flex flex-wrap items-center pt-8 md:pt-16">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 text-sm px-3 py-1 rounded-full mb-4">
              {t.tag}
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-gray-100 mb-6 leading-relaxed">
              {t.heading}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t.contactTitle}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      <span className="font-medium">{t.email}:</span>
                      <br />
                      <a
                        href="mailto:dakthi9@gmail.com"
                        className="hover:text-gray-900 dark:hover:text-white"
                      >
                        dakthi9@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">{t.location}:</span>
                      <br />
                      {t.locationValue}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t.responseTitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t.responseText}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    {t.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {t.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.companyPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {t.budget}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 transition-colors"
                    >
                      {t.budgetOptions.map((option, index) => (
                        <option key={index} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 transition-colors resize-vertical"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-sm hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.sending : t.send}
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
