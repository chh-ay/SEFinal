/**
 * @type {import('tailwindcss').Config}
 */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: ['light'],
		darkTheme: 'light'
	},

	plugins: [require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
