import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Light-mode palette. We keep the same class names from the dark version
      // (ink-950, ink-100, etc.) but invert the values, so existing component
      // markup auto-flips to a bright theme.
      // 950 = body background (warm cream)
      // 900 = card background (pure white)
      // 800 = hover bg + soft borders (slightly warmer cream)
      // 700 = stronger borders (warm beige)
      // 500 = muted text
      // 300 = body text
      // 100 = headings (near-black)
      colors: {
        ink: {
          950: "#FAFAF7", // cream — body bg
          900: "#FFFFFF", // pure white — cards
          800: "#F4F1EB", // soft cream — hover bg
          700: "#E5E1D9", // warm beige — borders
          500: "#8B8680", // muted gray — secondary text
          300: "#3D3935", // dark warm gray — body text
          100: "#1A1A1A"  // near-black — headings
        },
        accent: {
          DEFAULT: "#C8102E", // classic barber-pole crimson
          dark: "#A30D24"     // hover
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
