/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Righteous",
      body: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#218BBD",
        secondary: "#01B1E2",
        tertiary: "#004C66",
        accent: {
          DEFAULT: "#FC4182",
          hover: "#E63271",
        },
        paragraph: "#003F54",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
