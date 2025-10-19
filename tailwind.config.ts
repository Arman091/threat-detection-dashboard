import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'bg-color-primary': 'var(--bg-color-primary)',
        'button-primary-bg': 'var(--button-primary-bg)',
        'button-primary-text': 'var(--button-primary-text)',
        'background-secondary': 'var(--background-secondary)',
        'text-gray': 'var(--text-gray)',
        'Low-bg-color': 'var(--Low-bg-color)',
        'Medium-bg-color': 'var(--Medium-bg-color)',
        'High-bg-color': 'var(--High-bg-color)',
        'Critical-bg-color': 'var(--Critical-bg-color)',
        'threat-critical': 'var(--threat-critical)',
        'threat-high': 'var(--threat-high)',
        'threat-medium': 'var(--threat-medium)',
        'threat-low': 'var(--threat-low)',
        'threat-phishing': 'var(--threat-phishing)',
        'threat-malware': 'var(--threat-malware)',
        'threat-spam': 'var(--threat-spam)',
        'status-quarantined': 'var(--status-quarantined)',
        'status-active': 'var(--status-active)',
        'status-resolved': 'var(--status-resolved)',
      },
    },
    fontFamily: {
      'simplon': ['var(--primary-font)']
    },
    screens: {
      xs: { min: "390px", max: "639px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      "2lg": { min: "1024px", max: "1231px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
      "3xl": { min: "2180px" }
    },
  },
  plugins: [],
};
export default config;
