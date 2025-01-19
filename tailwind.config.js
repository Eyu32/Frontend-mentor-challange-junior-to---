/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'Alata':'"Alata", sans-serif',
        'Josefin-sans': '"Josefin Sans", sans-serif'
      },
      backgroundImage:{
        'hero-mobile': "url('/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/images/desktop/image-hero.jpg')"
      },
      colors: {
        'Dark-Gary': 'hsl(0, 0%, 55%)',
        'Very-Dark-Gary': 'hsl(0, 0%, 41%)'
      },
      width:{
        '104': '36rem',
        '112': '32rem'
      }

    },
  },
  plugins: [],
}

