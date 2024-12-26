/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js", // Add content path for the datepicker
  ],
  theme: {
    extend: {
      // Add custom screen size if needed
      screens: {
        'lg-custom': '1100px', // Custom screen for 1100px
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
