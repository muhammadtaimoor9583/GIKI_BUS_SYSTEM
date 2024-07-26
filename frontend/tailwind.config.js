/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
        'custom-indigo': 'rgb(75, 0, 130)',
        'custom-gray': 'hsl(0, 0%, 50%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes: false
  }
}

