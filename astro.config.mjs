// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    
  },
  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1", 
      ".trycloudflare.com"
    ],
  },
  
  // base: "/prueba/",
  // trailingSlash: "always",
  // output: "static",
  site: "https://aguilartest.netlify.app/",
  integrations: [sitemap()]
});