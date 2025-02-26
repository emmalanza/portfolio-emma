/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', 
	theme: {
		extend: {
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
