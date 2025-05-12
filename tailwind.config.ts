import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        orange: {
          50: "#fff8f1",
          100: "#feecdc",
          200: "#fcd9bd",
          300: "#fdba8c",
          400: "#ff8a4c",
          500: "#f37434", // Main orange from the SVG
          600: "#dd6b20",
          700: "#c05621",
          800: "#9c4221",
          900: "#7b341e",
          950: "#652b19",
        },
        blue: {
          50: "#e6f6fb",
          100: "#ccecf7",
          200: "#99d9ef",
          300: "#66c6e7",
          400: "#33b3df",
          500: "#33b9db", // Main blue from the SVG
          600: "#1a94b3",
          700: "#13708a",
          800: "#0d4b5c",
          900: "#06252e",
          950: "#031317",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "var(--tw-prose-body)",
            fontFamily: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            a: {
              color: "var(--tw-prose-links)",
              "&:hover": {
                color: "var(--tw-prose-links-hover)",
              },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: "-0.025em",
              fontFamily: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            },
            h2: {
              fontWeight: "700",
              letterSpacing: "-0.025em",
              fontFamily: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            },
            h3: {
              fontWeight: "700",
              letterSpacing: "-0.025em",
              fontFamily: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            },
            code: {
              fontFamily: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            },
            pre: {
              fontFamily: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
