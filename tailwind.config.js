module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    "fontFamily": {
      'sans': ['ui-sans-serif', 'system-ui'],
      "krona-one": "[Krona One]",
      "whyte": "[Whyte]"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#ec4755',
        secondary: '#a12c34',
        tertiary: '#99a0a3',
        border: '#1a2e35',
        background: '#000514',
      },
      height: {
        "65vh": "65vh"
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      backgroundImage: {
        "test": "#ec4755",
        'hero-pattern': "url('/assets/images/background.png')",
      },
      backgroundPosition: {
        'bottom-custom': 'center bottom -7rem',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
