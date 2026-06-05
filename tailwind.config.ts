import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                whitelabelLight: {
                    "primary": "#3b82f6",          // Hauptfarbe (wird über .env steuerbar)
                    "background": "#f8fafc",       // Globaler Seitenhintergrund (z.B. Slate 50)
                    "base-100": "#ffffff",         // Hintergrund für Cards, Boxen, Tabellen
                    "base-200": "#f1f5f9",         // Leicht abgetönt für Tabellen-Header / Inputs
                    "base-300": "#cbd5e1",         // Für dezente Rahmen (Borders)
                    "base-content": "#0f172a",     // Sehr dunkles Slate für extrem gute Lesbarkeit

                    // Hier passiert die globale Magie für den "modernen Look":
                    "--rounded-box": "1rem",       // Macht alle Cards und Modals modern rund
                    "--rounded-btn": "0.5rem",     // Macht alle Buttons dezent rund
                    "--rounded-badge": "0.375rem", // Macht alle Badges leicht eckig/modern statt pillenförmig
                    "--tab-radius": "0.5rem",
                },
            },
        ],
    },
} as Config;
export default config;