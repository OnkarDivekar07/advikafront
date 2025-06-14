/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ['"Great Vibes"', 'cursive'],
        gotham: ['"Gotham"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
