/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html" , 
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily :{
        popins :  '"Poppins", sans-serif'
      } , 
      colors : {
        'cyan' : '#2BD0D0' , 
        'light-cyan' : '#9AE3E3',
        'dark-violet' : '#4B3F6B' , 
        'gray' : '#EFF1F7' , 
        'grayish-violet': '#9E9AA8' , 
        'very-dark-blue' : '#34313D' , 
        'very-dark-violet' : '#3A3054'
      }
    },
  },
  plugins: [],
}

