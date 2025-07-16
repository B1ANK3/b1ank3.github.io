import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import UnoCSS from '@unocss/svelte-scoped/vite'

// import { visualizer } from 'rollup-plugin-visualizer'
export default defineConfig({
    plugins: [
        tailwindcss(),
        // Use when debugging
        // visualizer({
        // emitFile: true,
        // filename: 'stats.html'
        // }),
        UnoCSS({
            onlyGlobal: true,
            injectReset: '@unocss/reset/sanitize/sanitize.css'
        }),
        sveltekit()
    ],
    test: { include: ['src/**/*.{test,spec}.{js,ts}'] }
})
