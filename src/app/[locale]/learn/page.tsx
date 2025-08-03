"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { LearnHero } from "@/components/learn/LearnHero";
import { CoursesGrid } from "@/components/learn/CoursesGrid";

type Props = {
  params: { locale: string };
};

const supportedLocales = ["en", "vi"] as const;

export default function LearnPage({ params }: Props) {
  const [filterCategory, setFilterCategory] = useState("");

  // Safely normalize locale
  const locale = supportedLocales.includes(params.locale as any)
    ? (params.locale as "en" | "vi")
    : "en";

  return (
    <>
      <LearnHero lang={locale} />
      <Container className="mb-20">
        <CoursesGrid filterCategory={filterCategory} locale={locale} />
      </Container>
    </>
  );
}
