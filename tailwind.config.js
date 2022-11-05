/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#6E3EFF',
      secondary: '#FFBBD0',
      transparent: 'transparent',
      white: 'white'
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'heroImage': "url('./images/background.jpg')",
      }
    },
  },
  plugins: [],
}