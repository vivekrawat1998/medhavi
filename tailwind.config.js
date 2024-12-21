/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gilroyblack: ["gilroyblack"],
        gilroymedium: ["gilroymedium"],
        gilroysemibold: ["gilroysemibold"],
      
      },
      boxShadow: {
        'custom-blue': '0px 6px 20px 10px rgba(11, 126, 174, 0.14)',
      },
    },
  },
  plugins: [],
}