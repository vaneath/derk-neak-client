/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#026AA2",
        secondary: "#EAAA08",
        dark: "#1A1A1A",
        light: "#F8F8F8",
        gray: {
          100: "#F9F9F9",
          200: "#E5E5E5",
          300: "#D1D1D1",
          400: "#BDBDBD",
          500: "#A9A9A9",
          600: "#959595",
          700: "#818181",
          800: "#6D6D6D",
          900: "#595959",
        },
      },
    },
  },
  plugins: [],
};
