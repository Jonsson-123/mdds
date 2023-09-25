/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    /* 
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    */
    fontFamily: {
      body: ['"Open Sans"'],
      bold: ['"Open Sans-Bold'],
    },
    extend: {
      /*
      screens: {
        "3xl": "1700px",
      },
      */
      colors: {
        gmmidnightgreen: '#133c4b',
        gmpictonblue: '#5facd0',
        gmcastletongreen: '#1c5935',
        gmbondiblue: '#098eb1',
        gmairforceblue: '#52872a0',
      },
    },
  },
  plugins: [],
};
