/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: 
    {backgroundImage: {
      'working-img' : "url('/group.png')",
      'back' : "url('/gr.png')",
      'run' : "url('/round.png')"
    },
      
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Syne", "sans-serif"]
      },
      colors: {
        'heroBg' :  "#FDF8EE",
        'para':"rgb(0 0 0 / 80%)",
        'pan':"#FF7426",
        
        'primary': '#4D2C5E'
      }
    },
  },
  plugins: [],
}

