/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primal": "#CB9DF0",
        "light-green": "#38b2ac",
        "sun": "#FFD700",
        "moon": "#FFC300"
      },
      backgroundImage: {
        "gradient-primal":
          "linear-gradient(45deg, var(--color-primal), var(--color-light-green))",
        "gradient-secondary":
          "linear-gradient(45deg, var(--color-secondary), var(--color-tertiary))",
      },
      filter: {
        blur: "blur(100px)",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        500: "500px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
