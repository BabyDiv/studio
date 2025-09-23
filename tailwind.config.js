/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1064px',
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        shelley: ['"Shelley Volante"', 'cursive'],
      },
    },
  },
  plugins: [],
}

