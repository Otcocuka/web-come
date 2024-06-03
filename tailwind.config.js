module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      screens: {
        "sm-lg": { min: "640px", max: "1024px" },
        "lg-xl": { min: "1024px", max: "1280px" },
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
