/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
	  borderRadius: {
		'50%': '50%',
		  'pill': '2rem'
      },
	    gridTemplateColumns: {
		  '250/1fr': '250px 1fr'
	    },
		gridTemplateRows: {
		  '400': '400px'
	    }
    },
  },
  plugins: [],
}

