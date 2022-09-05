module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      whyte: ['Whyte'],
      poppins: ['Poppins', 'normal'],
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
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      mobile: '700px',
      desktop: '1330px',
    },
    extend: {
      colors: {
        whiteCustom: '#F2F2F2',
        whiteCustom2: '#FCFCFC',
        blackCustom: '#000514',
        primary: '#ec4755',
        secondary: '#a12c34',
        tertiary: '#99a0a3',
        border: '#1a2e35',
        background: '#000514',
        background2: '#E9E9E9',
      },
      height: {
        '65vh': '65vh',
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      backgroundImage: {
        test: '#ec4755',
        'hero-pattern': "url('/assets/images/background.png')",
        product: "url('/assets/images/Product1.png')",
        footer: "url('/assets/images/backgroundFooter.png')",
      },
      backgroundPosition: {
        'bottom-custom': 'center bottom -7rem',
      },
      boxShadow: {
        productInfo: '0px 40px 32px -24px rgba(15, 15, 15, 0.12)',
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
}
