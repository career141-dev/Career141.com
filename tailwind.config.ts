import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      colors: {
        'career-14-1comalto': 'var(--career-14-1comalto)',
        'career-14-1comblack': 'var(--career-14-1comblack)',
        'career-14-1comeden': 'var(--career-14-1comeden)',
        'career-14-1comgallery': 'var(--career-14-1comgallery)',
        'career-14-1comhibiscus': 'var(--career-14-1comhibiscus)',
        'career-14-1comwhite': 'var(--career-14-1comwhite)',
        'career-14-1comwoodsmoke': 'var(--career-14-1comwoodsmoke)',
        career141comblack0: 'var(--career141comblack-0)',
        'career141comblack-russian': 'var(--career141comblack-russian)',
        'career141comblue-stone': 'var(--career141comblue-stone)',
        'career141combottle-green': 'var(--career141combottle-green)',
        'career141comcape-cod': 'var(--career141comcape-cod)',
        'career141comelectric-lime': 'var(--career141comelectric-lime)',
        'career141commountain-meadow': 'var(--career141commountain-meadow)',
        'career141comsea-green': 'var(--career141comsea-green)',
        'career141comwhite-18': 'var(--career141comwhite-18)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        brand: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 900: '#1e3a8a' },
      },
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
      fontFamily: {
        'career141-com-font-awesome-5-brands-regular':
          'var(--career141-com-font-awesome-5-brands-regular-font-family)',
        'career141-com-font-awesome-5-free-solid':
          'var(--career141-com-font-awesome-5-free-solid-font-family)',
        'career141-com-quicksand-bold': 'var(--career141-com-quicksand-bold-font-family)',
        'career141-com-quicksand-medium-upper':
          'var(--career141-com-quicksand-medium-upper-font-family)',
        'career141-com-quicksand-regular': 'var(--career141-com-quicksand-regular-font-family)',
        'career141-com-quicksand-semibold': 'var(--career141-com-quicksand-semibold-font-family)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config