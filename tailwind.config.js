/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '0.8px',
        '1.5': '1.25px'
      },
      colors: {
        'dark-bg': 'rgb(15 15 20)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

