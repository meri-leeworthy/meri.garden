/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Sligoil", "sans-serif"],
      mono: ["Space-Mono", "monospace"],
      sans: ["Vercetti", "sans-serif"],
    },
    extend: {
      colors: {
        "purple-300": "#E2C0FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
