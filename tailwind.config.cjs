/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jite',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,//extra small
      sm: 16,// small
      md: 18,//medium
      lg: 20,//large
      xl: 24,//extra large
      '2xl': 32 // 2x extra large

    },
    colors: {
      transparent:"transparent",
      grey:{
      900: "#121214",
      800: "#202024",
      400: "#7c7c8a",
      200: "#c4c4cc",
      100: "#e1e1e6",
      },

      cyan:{
      500: "#81d8f7",
      300: "#9be1fb",
      },
      
      
      black: "#000000",
      white:'#fff',

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

