module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      }
    }
  }, 
  
  variants: {
    extend: {
      animation: ['group-hover'],  //need to add this, otherwise the bounce animation of tailwind scss will not work
    },
  },


  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]}
