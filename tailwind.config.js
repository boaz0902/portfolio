/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'bg': '#020617',
          'card': '#0F172A',
          'secondary': '#1E293B',
          'text': '#E2E8F0',
        },
        'primary': '#3B82F6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'md': '12px',
      },
    },
  },
  plugins: [],
}
