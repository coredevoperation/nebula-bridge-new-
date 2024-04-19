import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
       'orbitron': 'var(--font-orbitron)',
       'exo': 'var(--font-exo)',
    },
    screens: {
       "s": "400px",
       "xs": "500px",
       "sm": "640px",
       "md": "768px",
       "lg": "1024px",
       "xl": "1280px",
       "xxl": "1536px"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
