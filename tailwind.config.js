/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      gold: {
        DEFAULT: "#AD8330",
        rich: "#2E311A",
        bright: "#C6AE73",
        soft: "#AD9664",
        silt: "#6B5B2D"
      },
      pearl: "#C6AE73",
      antique: "#AD9664",
      silt: "#6B5B2D",
      velvet: "#2E311A"
    },
    extend: {
      colors: {
        charcoal: "#1F1F1F",
        spec: {
          gold: "#D4AF37",
          "gold-dark": "#B8860B"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "gold-linear": "linear-gradient(135deg, #6B5B2D 0%, #AD8330 52%, #C6AE73 100%)",
        "gold-soft": "linear-gradient(135deg, #FFFFFF 0%, #C6AE73 52%, #AD9664 100%)",
        "gold-band": "linear-gradient(90deg, #6B5B2D 0%, #AD8330 52%, #C6AE73 100%)",
        "header-cta": "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
        /** Bar: white / cream → soft warm gold (low contrast, matches premium header mock) */
        "header-bar":
          "linear-gradient(180deg, #FFFFFF 0%, #FFFDF7 38%, #FBF4E8 72%, #F5ECD9 100%)"
      },
      boxShadow: {
        header: "0 2px 8px rgba(0,0,0,0.06)",
        gold: "0 4px 14px #AD833014",
        "gold-lg": "0 8px 28px #6B5B2D18",
        insetGold: "inset 0 0 0 1px #AD966433"
      }
    }
  },
  plugins: []
};
