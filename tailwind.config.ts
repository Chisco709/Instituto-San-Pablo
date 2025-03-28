import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
    theme: {
  	 container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			sm: '1500px'
  		}
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
            glow: {
                "0%, 100%": {
                  textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff",
                },
                "50%": {
                  textShadow: "0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff",
                },
              },
              borderGlow: {
                "0%, 100%": {
                  boxShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff",
                  borderColor: "#ff00ff",
                },
                "50%": {
                  boxShadow: "0 0 10px #00ffff, 0 0 15px #00ffff",
                  borderColor: "#00ffff",
                },
              },
  		},
  		animation: {
            glow: "glow 3s ease-in-out infinite",
            borderGlow: "borderGlow 3s ease-in-out infinite",
  		}
  	}
  },
  plugins: [],
} satisfies Config