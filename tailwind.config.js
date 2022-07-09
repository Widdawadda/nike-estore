module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ["Michroma", "sans-serif"]
      },
      colors: {
        "primary-red": "#FF6452",
        "dark-red": "#662D26",
        "primary-blue": "#4E99F6",
        "dark-blue": "#1F3C60",
        "twitter": "#1da1f2"
      },
      backgroundColor: {
        "card-bg": "rgba(255, 255, 255, 0.2)",
      },
      borderColor: {
        "card-bg": "rgba(255, 255, 255, 0.3)",
      },
      boxShadow: {
        "card-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      transition: {
        "transition-icon": "0.75s ease-in-out",
      },
      content: {
        "twitter": '\f099',
      },
      background: {
        "test": "rgb(0 100 0 / 0.05) !important"
      }
    },
  },
  plugins: [],
}
