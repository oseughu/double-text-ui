import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $: resolve('src'),
      $components: resolve('src/components'),
      $stores: resolve('src/stores')
    }
  }
})
