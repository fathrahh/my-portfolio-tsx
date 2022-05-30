module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      boxShadow: {
        'all' : '0 0 15px 2px',
        'all-sm' : '0 0 12px 4px' 
      },
      colors:{
        "code-muted" : "#727072",
        "code-dark" : "#2D2A2E",
        "code-blue" : "#78DCE8",
        "code-green" : "#7DCE76",
        "code-red" : "#9F485F",
        "code-purple" : "#AB9DF2",
        "code-white" : "#FCFCFA",
        "dark-base" : "#1A1A1A",
        "dark" : "#0F0F0F"
      }
    },
  },
  plugins: [],
}
