import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from '@unocss/svelte-scoped/preprocess'

const prod = process.env.NODE_ENV !== 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        // Only using unocss for css icons
        UnoCSS({
            combine: prod
        })
    ],

    // Remove annoying warning with unocss using only globals
    onwarn(warning, handle) {
        if (warning.code !== 'vite-plugin-svelte-css-no-scopable-elements') {
            handle(warning)
        }
    },

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            // Redirects to +error.svelte
            fallback: '404.html',
            precompress: true,
            strict: true
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        }
    }
}

export default config
