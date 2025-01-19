/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'logo': "url('../images/logo.svg')",
        'header-mobile': "url('../images/bg-header-mobile.png')",
        'header-desktop': "url('../images/bg-header-desktop.png')",
        'image-computer': 'url("../images/image-computer.png")'
      },
      fontFamily:{
        'Bai-Jamjuree': '"Bai Jamjuree", sans-serif'
      },
      colors:{
        'Strong-Cyan': 'hsl(171, 66%, 44%)',
        'Light-Blue': 'hsl(233, 100%, 69%)',        
        'Dark-Grayish-Blue': 'hsl(210, 10%, 33%)',
        'Grayish-Blue': 'hsl(201, 11%, 66%)'
      },
      borderRadius:{
        '4xl': '35px'
      },
      boxShadow: {
        'Strong-Cyan-shadow': '0 10px 15px -3px rgba(38, 186, 164, 0.5), 0 4px 6px -4px rgba(38, 186, 164, 0.5)',
        'Light-Blue-shadow': '0 10px 15px -3px rgba(97, 115, 255, 0.5), 0 4px 6px -4px rgba(97, 115, 255, 0.5)'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
      },
    },
  },
  plugins: [],
}

