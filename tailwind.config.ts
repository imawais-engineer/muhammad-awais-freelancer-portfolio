import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        panel: "hsl(var(--panel))",
        "panel-strong": "hsl(var(--panel-strong))",
        "panel-border": "hsl(var(--panel-border))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      /* Fluid type scale: headings grow continuously from 320px to 1920px. */
      fontSize: {
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["clamp(1.125rem, 1.05rem + 0.35vw, 1.3rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.35rem, 1.2rem + 0.75vw, 1.75rem)", { lineHeight: "1.25" }],
        "3xl": ["clamp(1.6rem, 1.35rem + 1.25vw, 2.2rem)", { lineHeight: "1.15" }],
        "4xl": ["clamp(1.9rem, 1.5rem + 2vw, 2.75rem)", { lineHeight: "1.1" }],
        "5xl": ["clamp(2.1rem, 1.55rem + 2.75vw, 3.3rem)", { lineHeight: "1.08" }],
        "6xl": ["clamp(2.4rem, 1.6rem + 4vw, 4rem)", { lineHeight: "1.05" }],
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        elevated: "var(--shadow-elevated)",
        glow: "var(--glow-primary)",
        window: "var(--shadow-window)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "var(--shadow-panel)" },
          "50%": { boxShadow: "0 0 0 1px hsl(var(--primary) / 0.45), 0 10px 20px hsl(var(--primary) / 0.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.2, 0, 0, 1)",
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.2, 0, 0, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
