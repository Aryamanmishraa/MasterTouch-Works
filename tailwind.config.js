/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['"Manrope"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#dceafd',
          200: '#b9d3fb',
          300: '#8ab5f5',
          400: '#5a90ec',
          500: '#3d6cda',
          600: '#2e51bd',
          700: '#264095',
          800: '#223773',
          900: '#1c2f5c',
        },
        accent: {
          500: '#f5a524',
          600: '#d4881d',
        },
        slate: {
          950: '#0b1021',
        },
      },
      boxShadow: {
        glow: '0 18px 60px rgba(61, 108, 218, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #05070d 0%, #0a0c12 50%, #05070d 100%)',
        'paint-splash': 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.04), transparent 28%), linear-gradient(140deg, #05070d 0%, #0a0c12 50%, #05070d 100%)',
      },
    },
  },
  plugins: [],
}
