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
      },
      lineHeight: {
        defaultTextLH: '18px'
      }
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: []
}
