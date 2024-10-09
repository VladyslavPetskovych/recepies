/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPink1: "#ec2547",
        mainPink2: "#9a4f8f",
        btnYellow: "#FFFF00",
      },
      fontFamily: {
        averta: ["AvertaBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
