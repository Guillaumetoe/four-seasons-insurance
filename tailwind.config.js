/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        vertUn: "#046c34",
        couleur2: "#040406",
        couleur3: "#2b3392",
        vertDeux: "#046c3c",
        vertForet: "#18701c",
        couleurHeader: "#ececec",
      },
      fontFamily: {
        sans: ["roboto", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
