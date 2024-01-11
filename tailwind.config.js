/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CAECF1",
        secondary: "rgba(166, 216, 221, 0.12)",
        secondaryx: "rgba(166, 216, 221, 0.5)",
        imgbg: "rgba(166,216,221,.05)",
      },
      boxShadow: {
        in: "inset 0px -40px 32px 0px rgb(0,0,0,1);",
      },
    },
  },
  plugins: [],
};
