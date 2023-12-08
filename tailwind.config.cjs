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
          btn: '#2D2D2DAA'
        },
        hover: {
          btn: '#3E3E3EAA',
          text: '#EFEFEF'
        },
        text: {
          primary: '#F1F5F1',
          secondary: '#A5A5A5',
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
          white: '#F1F5F1'
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
        btn: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

