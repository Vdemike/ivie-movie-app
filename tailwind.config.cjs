/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/cinema.jpg')",
      },
      screens: {
        xs: "350px",
      },
    },
    fontFamily: {
      title: ["rowdies"],
      sans: ["abeezee"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
