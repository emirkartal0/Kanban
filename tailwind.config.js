/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      myColor: {
        100: '#FBF8F1',
        200: '#F7ECDE',
        300: '#E9DAC1',
        400: '#54BAB9'
      },
    },
  },
  plugins: [],
});
