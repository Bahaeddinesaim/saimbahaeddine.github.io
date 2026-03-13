/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        bg: {
          DEFAULT: "#030712"
        },
        surface: {
          DEFAULT: "#020617",
          soft: "#020617",
          elevated: "#020617"
        }
      },
      boxShadow: {
        "soft-glow": "0 18px 60px rgba(15,23,42,0.9)"
      }
    }
  },
  plugins: []
};

