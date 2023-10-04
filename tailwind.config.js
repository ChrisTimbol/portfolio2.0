/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '14px',
        'xxxs': '12px',
        'xxxxs': '10px',
      },
      grayscale: {
        50: '50%',
      },
      transitionProperty: {
        'rotate-scale': 'transform',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/peaks.svg')",
      },
      screens: {
        'phone': {'max': '599px'}, // Width < 600
        'medium': {'min': '600px', 'max': '839px'}, // 600 < width < 840
        'expanded': {'min': '840px'}, // Width > 840
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        robotoSerif: ['var(--font-roboto-serif)'],
        robotoMono: ['var(--font-roboto-mono)'],
        styleScript: ['var(--font-stylescript)'],
      },
      
    },
  },
  plugins: [],
}
