/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage :{
        'hero-image' : "url('./src/img/image22.jpg')"
      }
    },
    fontFamily: {
      Paytone: ['Paytone One', "sans-serif"],
      Poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

