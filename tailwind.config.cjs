/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#1C1C1C',
          secondary: '#141212',
          skills: '#272727',
          btn: '#2D2D2DAA',
          active: '#4e119d',
          'active-light': '#8B5CF6'
        },
        hover: {
          btn: '#3E3E3EAA',
          text: '#EFEFEF',
          outline: '#C0C0C088'
        },
        text: {
          primary: '#F0F0F0',
          secondary: '#A5A5A5',
          ternary: '#525252',
          negative: '#000',
          active: '#805AD5',
        },
        skills: {
          green: '#22C55E',
          'green-light': '#4ADE80',
          yellow: '#FACC15',
          blue: '#3B82F6',
          cyan: '#22D3EE',
          orange: '#F97316',
          pink: '#EC4899',
          purple: '#8B5CF6',
          white: '#F0F0F0'
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
        15: '3.75rem'
      },
      maxWidth: {
        page: '1300px',
        nav: '1480px'
      },
      boxShadow: {
        skills: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        btn: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        card: '0px 16px 60px 4px rgba(128, 90, 213, 0.3)'
      },
      keyframes: {
        'card-shadow-pulse': {
          '0%, 100%': { boxShadow: '0px 16px 60px 4px rgba(128, 90, 213, 0.3)' }, 
          '50%': { boxShadow: '0px 16px 60px 20px rgba(128, 90, 213, 0.7)' }, 
        },
        'card-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
      animation: {
        'card-shadow-pulse': 'card-shadow-pulse 300ms ease-in-out',
        'card-pulse': 'card-pulse 300ms ease-in-out',
      }
    },
  },
  plugins: [],
}

