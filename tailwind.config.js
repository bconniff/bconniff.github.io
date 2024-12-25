/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: [ 'Lato', 'sans' ],
      serif: [ 'Lora', 'serif' ]
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    }
  },

  plugins: []
};

/* vim:set sw=2 sts=2 ts=2: */
