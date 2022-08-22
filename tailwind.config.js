const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const primary = '#5553ff'
const secondary = '#14142f'

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			blue: {
				800: '#2e2e40',
				700: '#2320cc',
				600: '#5553ff',
			},
			gray: {
				300: '#f5f5f5',
				400: '#c1c1c6',
			},
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: theme('colors.blue.600'),
					color: '#fff',
					borderRadius: '0.125rem',
					transition: 'background-color, .3s ease-in-out',
					'&:hover': {
						backgroundColor: theme('colors.blue.700'),
					},
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
