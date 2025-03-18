/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', 
	theme: {
		extend: {
			fontFamily: {
				onest: ['Onest Variable', 'sans-serif'],  
				banger: ['Bangers', 'sans-serif'],  
			  },
			colors: {

				'pink-dark': '#a51080', 
				'pink-light': '#ff2ecc', 
				'bright-yellow': '#e0ff4f',
				'yellow': '#FFBF00', 
			}
		},
	},
	plugins: [],
}
