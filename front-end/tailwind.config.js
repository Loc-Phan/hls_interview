/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				green: "#29b363",
				blue: "#2c7edb",
				white1: "#e5f6ed",
				neutral1: "#BBB2A7",
				neutral2: "#504E4B",
			},
		},
	},
	plugins: [
		({ addComponents, theme }) => {
			addComponents({
				".container": {
					"@apply mx-auto": {},
					"@apply px-4": {},
				},
				".container-md": {
					"@apply max-w-[1228px]": {},
					"@apply mx-auto": {},
				},
			});
		},
	],
};
