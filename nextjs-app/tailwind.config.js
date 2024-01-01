/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'button-color': '#46f5f8',
        'custom-dark': '#28324d',
        'custom-light': '#f9fafe',
        'footer-bg': '#313359',
        'proflytic-primary': '#3b3f6c',
        'proflytic-secondary': '#1b1f22',
        'title-color': '#feffff',  // Your title color
        'subtitle-color': '#732d51', // Your subtitle color
        'description-color': '#c6cbcf', // Your description color
        'title-color': '#fffefa',       // Custom color for the title
        'paragraph-color': '#ded7df',   // Custom color for the paragraph
        'button-bg-1': '#e86aaa',       // Background color for the first button
        'button-text-1': '#ebd0df',     // Text color for the first button
        'button-icon-1': '#22b9b2',     // Icon color for the first button
        'button-bg-2': '#1f8fc1',       // Background color for the second button
        'button-text-2': '#e7fdff',     // Text color for the second button
        'e86aaa': '#e86aaa',
        'ebd0df': '#ebd0df',
        '1f8fc1': '#1f8fc1',
        'e7fdff': '#e7fdff',
        '5c8c80': '#5c8c80',

        

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}