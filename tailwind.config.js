/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js", "./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    screens:{
      'md':'800px'
    },
    extend: {
      colors: {
        'trusty-blue': '#368cbf'
      }
    },
  },
  plugins: [],
};

