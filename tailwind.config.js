/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1A3636',
        'custom-medium': '#40534C',
        'custom-light': '#677D6A',
        'custom-beige': '#E2F1E7',
      },
      fontFamily: {
        buche: ['Buche', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

