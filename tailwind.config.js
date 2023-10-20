/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: ['*, ::before, ::after'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

