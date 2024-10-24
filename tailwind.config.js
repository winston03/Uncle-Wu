/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '360px',
        'tablet': '680px',
        'laptop': '1024px',
      },
      colors: {
        'light-yellow': '#fef9c3'
      },
      animation: {
        float: 'float 3s linear infinite',
        circle: 'circle 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        circle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' },
        },
      },
      backgroundImage: {
        'homebg': "url('./assets/image/homebg.png')",
        'menubg': "url('./assets/image/menubg.jpeg')",
      },
      fontFamily: {
        'kelvinch': ['Kelvinch', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide'),
  ],
}

