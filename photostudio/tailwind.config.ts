import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1815",       // near-black, warm charcoal
        paper: "#F4EFE6",     // warm off-white
        sand: "#DCCBB0",      // warm beige
        clay: "#9C7A55",      // muted bronze-clay accent
        espresso: "#2E2A24",  // deep warm brown
        mist: "#DDD6C9",      // hairline / divider tone
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-schibsted)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
