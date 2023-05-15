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
  plugins: [require("tailwindcss-animate"),require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [{
      firtheme: {
        primary: "#ff0d0c",
        secondary: "#FFC81D",
        "base-100": "#ffffff",
      }
    }]
  },
}

