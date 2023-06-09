/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF40FC',
        secondary: '#6064FF',
        accent: '#FFB7C7',
        lipa: '#FF40FC',
        tamagotchi: '#6064FF',
        motita: '#FFB7C7',
        alpinito: '#A37CFF',
        success: '#3AD399',
        info: '#2563EB',
        danger: '#F35B69',
        warning: '#FAAD14',
        disabled: '#F35B69',
      }
    },
  },
  plugins: [],
}
