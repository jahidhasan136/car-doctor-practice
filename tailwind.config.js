/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF3811",
        gray: "#E8E8E8",
        darkGray: "#737373",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          xs: "1rem",
          sm: "1rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        xs: "425px",
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1220px",
        "2xl": "1620px",
      },
    },
  },
  plugins: [],
};
