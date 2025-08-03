import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "700",
              fontSize: "2.5rem",
              letterSpacing: "-0.02em",
            },
            p: {
              color: "var(--tw-prose-body)", // dynamic color
              fontSize: "1.1rem",
              lineHeight: "1.75",
            },
            ul: {
              color: "var(--tw-prose-body)", // dynamic color
              fontSize: "1.1rem",
              lineHeight: "1.60",
              textAlign: "left",
            },
            a: {
              color: "var(--tw-prose-links)", // dynamic color
              "&:hover": {
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: "var(--tw-prose-pre-bg)", // dynamic color
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              textAlign: "left",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": "#e5e7eb",            // text-gray-200
            "--tw-prose-headings": "#ffffff",        // headings white
            "--tw-prose-links": "#93c5fd",           // soft blue links
            "--tw-prose-bold": "#ffffff",            // bold text white
            "--tw-prose-quotes": "#d1d5db",          // quote text
            "--tw-prose-quote-borders": "#4b5563",   // quote borders
            "--tw-prose-captions": "#9ca3af",        // figcaption
            "--tw-prose-pre-bg": "#374151",          // code block background
            "--tw-prose-th-borders": "#6b7280",
            "--tw-prose-td-borders": "#4b5563",
            code: { backgroundColor: "#374151" },    // inline code bg
          },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
