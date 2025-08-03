import React from "react";
import { Container } from "@/components/common/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`max-w-4xl mx-auto mb-12 ${
        props.align === "left" ? "text-left" : "text-center"
      }`}>
      {props.preTitle && (
        <div className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm px-3 py-1 rounded-full mb-4">
          {props.preTitle.toLowerCase()}
        </div>
      )}

      {props.title && (
        <h2 className="text-3xl lg:text-4xl font-light text-gray-800 dark:text-gray-100 mb-6 leading-relaxed">
          {props.title.toLowerCase()}
        </h2>
      )}

      {props.children && (
        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto space-y-4">
          {props.children}
        </div>
      )}
    </Container>
  );
}

