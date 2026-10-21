/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Broadcast timing graphics: black screen, white numerals, status colours.
        void: "#08080a",
        bar: "#131317",
        "bar-hi": "#1c1c22",
        rule: "#2a2a31",
        chalk: "#f3f3ef",
        dim: "#9c9ca6",
        purple: "#b07cff",
        green: "#3ddc79",
        yellow: "#ffd23f",
        lights: "#ff1e10",
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        layout: "1440px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
