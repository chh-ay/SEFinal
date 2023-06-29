/** 
 * @type {import('tailwindcss').Config}
*/
const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'), 
			'../**/*.{html,js,svelte,ts}'
			)
	],

	theme: {
		extend: {},
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('flowbite/plugin'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	],
};

module.exports = config;
