/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        slide: {
          from: {
            transform: "translateY(-100%)"
          },
          to: {
            transform: "translateY(0%)"
          }
        } 
      },
      animation: {
        appear: "appear 1s ease-in-out forwards",
        slide: "slide 750ms ease-in-out forwards",

      },
    }
  },
  plugins: [],
};