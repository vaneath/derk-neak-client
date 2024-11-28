/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#026AA2",
        secondary: "#EAAA08",
        orange: "#dc6803",
        green: "#16b364",
      },
    },
  },
  plugins: [],
};
