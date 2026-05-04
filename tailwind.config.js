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
        DEFAULT: "#D4AF37",
        rich: "#C9A227",
        bright: "#FFD700",
        soft: "#E6BE8A"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "gold-linear": "linear-gradient(135deg, #C9A227 0%, #D4AF37 48%, #FFD700 100%)",
        "gold-soft": "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 46%, #E6BE8A 100%)",
        "gold-band": "linear-gradient(90deg, #D4AF37 0%, #FFD700 52%, #E6BE8A 100%)"
      },
      boxShadow: {
        gold: "0 18px 55px #D4AF3726",
        "gold-lg": "0 26px 90px #D4AF3733",
        insetGold: "inset 0 0 0 1px #E6BE8A"
      }
    }
  },
  plugins: []
};
