import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#280071', // header background
          border: '#EFF0F129', // subtle header bottom border
          accent: '#FF2C8B', // pink CTA
          accentSoft: '#FF9AC5',
        },
      },
      height: {
        header: '96px', // Figma: height 96
      },
      spacing: {
        // Figma: padding-top/bottom: spacing-3xl (approx 24px)
        'header-y': '24px',
      },
      maxWidth: {
        content: '1200px', // to match your main layout width
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
