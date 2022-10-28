module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: ['light', 'dracula']
  },
  theme: {
    boxShadow:{
      blur: "inset 0 0 1px 1px hsla(0,0%,100%,.9),0 20px 27px 0 rgba(0,0,0,.05)",
    }
  }
};
