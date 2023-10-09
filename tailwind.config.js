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
