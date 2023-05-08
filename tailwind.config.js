/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redfirb: '#ff0d0c',
      },
      fontFamily: { kd: "K2D" },
    },
  },
  plugins: [],
}

