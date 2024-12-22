/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  ]
 
};
