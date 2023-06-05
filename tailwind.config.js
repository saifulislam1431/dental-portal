/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#07332F",
        
"secondary": "#F7A582",
        
"accent": "#F1F5F9",
        
"neutral": "#2b1d2f",
        
"base-100": "#ffffff",
        
"info": "#8498e1",
        
"success": "#7fe6d0",
        
"warning": "#f3c672",
        
"error": "#f22e1c",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

