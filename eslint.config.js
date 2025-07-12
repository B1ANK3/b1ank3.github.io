import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

import { defineConfig } from 'eslint/config'

export default defineConfig([
    prettier,
    ...svelte.configs.recommended,
    ...svelte.configs.prettier,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    {
        ignores: ['build/', '.svelte-kit/', 'dist']
    }
])
