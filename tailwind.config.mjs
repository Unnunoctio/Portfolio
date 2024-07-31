/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				geist: ['Geist']
			},
			colors: {
				bg: {
					primary: '#1C1C1C',
					secondary: '#141212',
					skills: '#272727',
					btn: '#2D2D2DAA',
					active: '#4E119D',
					'active-light': '#8B5CF6',
					component: '#211F1F',
					modal: '#141212',
					skeleton: '#525252'
				},
				hover: {
					btn: '#3E3E3EAA',
					text: '#EFEFEF',
					component: '#3E3E3EAA',
					outline: '#C0C0C088'
				},
				text: {
					primary: '#F0F0F0',
					secondary: '#A5A5A5',
					ternary: '#525252',
					active: '#805AD5'
				},
				divider: {
					component: '#353535'
				},
				calendar: {
          0: '#2D2D2Dab',
          1: '#433853',
          2: '#58447C',
          3: '#6C4Fa8',
          4: '#8B5CF6',
          border: 'rgba(255, 255, 255, 0.05)'
        }
			},
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
				17: '4.25rem',
				19: '4.75rem',
				21: '5.25rem',
				23: '5.75rem'
			},
			maxWidth: {
				page: '1480px',
				'skill-box': '520px' 
			},
			boxShadow: {
				skills: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
				btn: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
				card: '0px 16px 60px 4px rgba(128, 90, 213, 0.3)'
			},
			keyframes: {
				'card-shadow-pulse': {
          '0%, 100%': { boxShadow: '0px 16px 60px 4px rgba(128, 90, 213, 0.3)', transform: 'scale(1)' }, 
          '50%': { boxShadow: '0px 16px 60px 20px rgba(128, 90, 213, 0.7)', transform: 'scale(1.03)' }, 
        },
        'card-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
			},
			animation: {
				'card-shadow-pulse': 'card-shadow-pulse 300ms ease-in-out',
        'card-pulse': 'card-pulse 300ms ease-in-out',
			}
		},
	},
	plugins: [],
}
