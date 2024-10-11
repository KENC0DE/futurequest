/** @type {import(tailwindcss).Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#121212",
        "auth-bg": "#1e1e1e",
        "accent-purple": "#bb86fc",
        "accent-teal": "#03dac6",
        "hover-teal": "#00fff1",
        "hover-purple": "#a366e0",
      },
    },
  },
  plugins: [],
};
