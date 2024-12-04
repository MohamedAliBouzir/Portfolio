/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        "light-green": "#38b2ac",
        secondary: "#f6ad55",
        tertiary: "#fbbf24",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(45deg, var(--color-primary), var(--color-light-green))",
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
