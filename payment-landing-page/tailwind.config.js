/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'landing': "#e7ddfc",
        'midnight': "#1e1e1e",
      },
    },
  },
  plugins: [],
}

