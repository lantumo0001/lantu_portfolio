/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#151515",
          900: "#191919",
        },
        secondary: "#88CE52",
        white: "#F4F4F4",
      },
      fontFamily: {
        "primary-font": ["Audiowide", "sans-serif"],
        "secondary-font": ["Genos", "sans-serif"],
      },
    },
  },
  plugins: [],
};
