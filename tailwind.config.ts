import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          home: '#1c1c1c',
          project: '#141212',
          modal: '#141212'
        },
        text: {
          main: '#f1f5f1',
          secondary: '#a5a5a5',
          hover: '#efefef',
          focus: '#805ad5'
        },
        button: {
          bg: '#2d2d2daa',
          hover: '#3e3e3eaa'
        },
        card: {
          outline: '#c0c0c088'
        },
        calendar: {
          0: '#2d2d2dab',
          1: '#433853',
          2: '#58447c',
          3: '#6c4fa8',
          4: '#8b5cf6',
          border: 'rgba(255, 255, 255, 0.05)'
        },
        skill: {
          node: '#22c55e',
          react: '#22d3ee',
          html: '#f97316',
          css: '#3b82f6',
          js: '#facc15',
          ts: '#3b82f6',
          mysql: '#3b82f6',
          mongo: '#4ade80',
          graphql: '#ec4899',
          api: '#8b5cf6',
          bg: '#272727'
        }
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        body: '6.75rem'
      },
      maxWidth: {
        'page-container': '1500px'
      },
      boxShadow: {
        'btn-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'skill-box': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
}
export default config
