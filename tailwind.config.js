/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeBg': "url('src/assets/HUAWEI-4.jpg')"
      }
    },
  },
  plugins: [],
}

