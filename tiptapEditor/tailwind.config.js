/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,  // this will disable tailwind base style 
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

