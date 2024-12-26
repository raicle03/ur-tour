/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./myreact/src/**/*.{js,jsx,ts,tsx}", // Scans all files inside the src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1A3636', // A dark green shade
        'custom-medium': '#40534C', // Another dark green shade
        'custom-light': '#677D6A', // A light beige shade
        'custom-soft': '#E0FBE2', // A soft off-white shade
      },
    },
  },
  plugins: [],
};
