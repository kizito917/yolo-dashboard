/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1565D8',
        'default': '#ffffff',
      },
      width: {
        'default': '98%;'
      }
    },
  },
  plugins: [],
}

