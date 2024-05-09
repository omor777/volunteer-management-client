/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "rgb(139 92 246)",
        "primary-dark": "rgb(109 40 217)",
        "primary-light": "rgb(196 181 253)",
      },
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
    },
    boxShadow: {
      card1:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
  },
  plugins: [require("daisyui")],
};
