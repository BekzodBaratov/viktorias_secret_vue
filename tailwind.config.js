/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#FFB6C1",
        "color-primary2": "#FFB6C14D",
        "color-line": "#E5E5E5",
        "color-black": "#121212",
        "color-black2": "#A0A0A0",
        "color-secondary": "#616161",
        "color-background": "#F5F5F5",
        "color-line": "#E5E5E5",
        "color-danger": "#DB4444",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
      screens: {
        xxs: "450px",
        xs: "576px",
      },
      boxShadow: {
        card: "0 2px 10px rgba(0, 0, 0, 0.2)",
        card2: "0 -4px 10px rgba(0, 0, 0, 0.2)",
      },
      aspectRatio: {
        "16/9": "16/9",
        banner: "19/6",
      },
    },
  },
  plugins: [],
};
