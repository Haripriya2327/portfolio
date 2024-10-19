/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
      'home-bg-desktop': "url('./src/assets/home-bg-desktop.png')",
      'home-bg-mobile': "url('./src/assets/home-bg-mobile.png')",
    }
  },
  },
  plugins: [require('daisyui')],
};