/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      cabinetgrotesk: ["Cabinet Grotesk"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        backLight: "url('/img/backLght.svg')",
      },
      colors: {
        "color-rgba": "rgba(109, 184, 232, 0.2)",
        "first-color": "#2589BD",
        "light-color": "#6DB8E8",
        "dark-color": "#272838",
      },
    },
  },
  plugins: [],
};
