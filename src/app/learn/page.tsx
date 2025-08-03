"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { LearnHero } from "@/components/learn/LearnHero";
import { CoursesGrid } from "@/components/learn/CoursesGrid";
import { CourseFilters } from "@/components/learn/CourseFilters";

export default function LearnPage() {
  const [filterCategory, setFilterCategory] = useState("");

  return (
    <>
      <LearnHero />
      
      <Container className="mb-20">
        <CoursesGrid filterCategory={filterCategory} />
      </Container>
    </>
  );
}