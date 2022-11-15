import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            includeAssets: [
                "vite.svg",
                "runs.csv",
                "test.csv",
                "wickets.csv",
                "robots.txt",
            ],
            manifest: {
                name: "T20 Stats Aggregate",
                short_name: "T20 Stats",
                description: "Browse stats of the T20 World Cup 2022",
                theme_color: "#000000",
                icons: [
                    {
                        src: "android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                      src: "android-chrome-512x512.png",
                      sizes: "512x512",
                      type: "image/png",
                      purpose: 'any maskable'
                  },
                ],
            },
        }),
    ],
});
