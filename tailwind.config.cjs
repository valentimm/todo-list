/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#8284fa',
        'purple-dark': '#5e60ce',
        'blue-light': '#4ea8de',
        'blue-dark': '#1e6f9f',
        'gray-100': '#F2F2F2',
        'gray-200': '#d9d9d9',
        'gray-300':'#808080',
        'gray-400': '#333333',
        'gray-500': '#262626',
        'gray-600': '#1A1A1A',
        'gray-700': '#0D0D0D',
        'red-danger': '#e25858'
      },
      spacing: {
        '159' : '39.75rem',
        '160': '41rem',
        '184' : '46rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
}
