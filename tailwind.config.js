/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "pastel-blue": "#C6DEF1",
        "pastel-yellow": "#FAEDCB",
        "pastel-green": "#C9E4DE",
        "pastel-purple": "#DBCDF0",
        "pastel-pink": "#F2C6DE",
        "pastel-orange": "#F7D9C4",
        "text-color": "#ABB2BF",
        "bg-background": "#282C33",
        "dark-mode-content": "#3A3E45",
        "light-mode-content": "#F6F6F6",
      },
      rotate: {
        20: "20deg",
      },
    },
  },
  plugins: [],
};
