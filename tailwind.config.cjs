/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        'border-inherit': 'inherit'
      },
      colors: {
        fadenight: '#161616'
      }
    }
  },
  plugins: []
}
