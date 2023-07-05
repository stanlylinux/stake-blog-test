/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: "#B1BAD3",
        "dark-blue-100": "#1A2C38",
        "dark-blue-200": "#0F212E",
        "dark-blue-300": "#071D2A",
        darkslategray: {
          100: "#2f4553",
          200: "#213743",
          300: "#1a2c38",
        },
        dodgerblue: "#1475e1",
        white: "#fff",
        gray: {
          100: "#0f212e",
          200: "#071d2a",
        },
        lightsteelblue: "#b1bad3",
        lavender: "#d5dceb",
      },
      backgroundColor: {
        darkBlue: "#0F212E",
        darkSecondBlue: "#1A2C38",
        surface: "#071824",
        lightSurface: "#213743",
        primaryBase: "#1475E1",
        gray600: "#1A2C38",
        gray800: "#071D2A",
      },
    },
  },
  plugins: [],
};
