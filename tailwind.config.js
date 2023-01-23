/** @type {import('tailwindcss').Config} */

//add neccessary font in globalstyled.css which is import in main file
//globalStyle.css


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '270px',
      sm:'650px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Lato:['Lato','sans-serif'],
        Poppin:['Poppin', 'sans-serif']
      }, //end of fontFamily
    },
  },
  plugins: [],
}
