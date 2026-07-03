import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Quiet luxury palette — warm neutrals, no pure black, no shouting.
      // Reference: Aesop / The Row / Loro Piana restraint.
      //
      // 950 = body background (warm bone)
      // 900 = card background (pure white)
      // 800 = hover / soft cream
      // 700 = warm sand borders
      // 500 = warm gray muted text
      // 300 = warm slate body text
      // 100 = warm charcoal headings (never pure black)
      colors: {
        ink: {
          950: "#F5F1EB", // bone — warm off-white body bg
          900: "#FFFFFF", // pure white — cards
          800: "#EDE7DC", // warm cream — hover states
          700: "#DDD1BF", // warm sand — borders
          500: "#8B8073", // warm gray — muted text
          300: "#4A423A", // warm slate — body text
          100: "#1C1A17"  // warm charcoal — headings
        },
        accent: {
          DEFAULT: "#7A6547", // warm mocha — quiet accent
          dark: "#5C4B32"     // deeper mocha for hover
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-up": "slideUp 0.6s ease-out both"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
