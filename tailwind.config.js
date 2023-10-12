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
        'xxxxs': '8px',
        'small': 'var(--has-small-font-size)',
        'medium': 'var(--has-medium-font-size)',
        'large': 'var(--has-large-font-size)',
        'x-large': 'var(--has-x-large-font-size)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        robotoSerif: ['var(--font-roboto-serif)'],
        robotoMono: ['var(--font-roboto-mono)'],
        styleScript: ['var(--font-stylescript)'],
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
