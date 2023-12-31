/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {},
  screens:{
    'xs': '350px',
      ...defaultTheme.screens,
  }
};
export const plugins = [];

