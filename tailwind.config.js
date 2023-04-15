/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      // screens: {
      //   xs: '480px',
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
    },
    // screens: {
    //   sm: '640px',
    //   md: '640px',
    //   lg: '640px',
    //   xl: '640px',
    //   '2xl': '640px',
    // },
    extend: {
      textColor: {
        color: {
          primary: 'rgb(var(--600))',
        },
      },
      // backgroundColor: {
        // 'btn-hover': 'rgb(var(--200) / .5)',
        // 'btn-hover-dark': 'rgb(var(--200) / .2)',
        // 'btn-active': 'rgb(var(--200) / .8)',
        // 'btn-active-dark': 'rgb(var(--200) / .1)',
      // },
      colors: {
        900: withOpacityValue('--900'),
        800: withOpacityValue('--800'),
        700: withOpacityValue('--700'),
        600: withOpacityValue('--600'),
        500: withOpacityValue('--500'),
        400: withOpacityValue('--400'),
        300: withOpacityValue('--300'),
        200: withOpacityValue('--200'),
        100: withOpacityValue('--100'),
        50: withOpacityValue('--50'),
      },
    },
  },
  plugins: [],
}
