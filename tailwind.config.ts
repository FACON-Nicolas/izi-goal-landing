import type { Config } from 'tailwindcss';

const tintColorDark = '#2f95dc';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        'text-button': 'white',
        text: '#121212',
        background: '#EDE8D0',
        tint: tintColorDark,
        icon: '#121212',
        'tab-icon-default': '#9BA1A6',
        'tab-icon-selected': tintColorDark,
        border: '#121212',
        placeholder: '#687076',
        link: '#0a7ea4',
        error: '#ff0000',
      },
    },
  },
  plugins: [],
} satisfies Config;
