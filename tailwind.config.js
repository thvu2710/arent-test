/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      normal: ['16px', '23px']
    },
    extend: {
      colors: {
        dark: '#2E2E2E',
        titanBlack: '#414141',
        gray: '#777777',
        light: '#ffffff',
        yellow: '#FFCC21',
        orange: '#FF963C',
        'dark-organge': '#EA6C00',
        'light-green': '#8FE9D0'
      }
    }
  },
  plugins: []
}
