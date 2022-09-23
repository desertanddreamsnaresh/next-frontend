module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
  },
}