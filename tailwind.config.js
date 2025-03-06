/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
        customPrimary: '#0a66c2',
          primaryHover: '#004182',
        },
      },
    },
    plugins: [],
  }
  