/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      span: ["Raleway", "sans-serif"],
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
      spacing: {
        18: "4.5rem",
      },
      colors: {
        primary: "#218BBD",
        secondary: "#01B1E2",
        tertiary: "#004C66",
        accent: {
          DEFAULT: "#FC4182",
          hover: "#E63271",
        },
        paragraph: "#003F54",
        login: {
          color: "#002531",
        },
      },
      backgroundImage: {
        login: "url('https://picsum.photos/400/400/?random')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
