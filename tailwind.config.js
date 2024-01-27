/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        color1: '#606080',
        color2: '#8d7dca',
        color3: '#212121',
        color4: '#b197fc',
        color5: '#a292ff',
        color6: '#ba7e7e'
      }
    },
  },
  plugins: [],
};
