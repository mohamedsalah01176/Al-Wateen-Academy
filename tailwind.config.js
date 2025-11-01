/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#B9CF25",
        secondary2: "#457b9d",
      },
    },
  },
  plugins: [],
};


// npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
