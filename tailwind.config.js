/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f3f3',
          100: '#f3e6e6',
          200: '#e6cccc', 
          300: '#d9b3b3',
          400: '#cc9999',
          500: '#bf8080',
          600: '#a66666',
          700: '#8c4d4d',
          800: '#733333',
          900: '#591a1a'
        },
        accent: {
          light: '#e8e1d3',
          DEFAULT: '#c2b4a0',
          dark: '#8c7355'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Heading Scale - Following a modular scale for better hierarchy
        '6xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],    // 64px
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],    // 48px
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],  // 40px
        '3xl': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],    // 32px
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],  // 24px
        'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],  // 20px
        
        // Body Scale - Optimized for readability
        'lg': ['1.125rem', { lineHeight: '1.6' }],      // 18px
        'base': ['1rem', { lineHeight: '1.6' }],        // 16px
        'sm': ['0.875rem', { lineHeight: '1.6' }],      // 14px
        'xs': ['0.75rem', { lineHeight: '1.6' }],       // 12px
      },
      spacing: {
        // Consistent spacing scale for better proximity relationships
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
      },
    },
  },
  plugins: [],
};