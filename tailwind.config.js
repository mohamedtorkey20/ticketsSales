/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neoSans: ['"Neo Sans Arabic"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        purpleBackground: '#8A74F9',
        overlay: 'rgba(61, 64, 91, 0.16)'  // equivalent to #3D405B29
      }

    },
  },
  plugins: [],
}

