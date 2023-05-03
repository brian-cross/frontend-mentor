/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "mono"],
    },
    colors: {
      fuscia: "#A445ED",
      red: "#FF5252",
      white: "#FFFFFF",
      transparent: "transparent",
      black: {
        100: "#3A3A3A",
        200: "#2D2D2D",
        300: "#1F1F1F",
        400: "#050505",
      },
      grey: {
        100: "#F4F4F4",
        200: "#E9E9E9",
        300: "#757575",
      },
    },
  },
};
