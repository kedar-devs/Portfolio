/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        tint:'#00A5B0'
      },
      backgroundImage: {
        'home':"url(/src/assets/Home.png"
      }
    },
  },
  plugins: [],
  darkMode:'class'
}
