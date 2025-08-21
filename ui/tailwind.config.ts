import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'hsl(var(--bg))',
          soft: 'hsl(var(--bg-soft))',
          elevated: 'hsl(var(--bg-elevated))',
        },
        fg: {
          DEFAULT: 'hsl(var(--fg))',
          muted: 'hsl(var(--fg-muted))',
          dim: 'hsl(var(--fg-dim))',
        },
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
} satisfies Config
