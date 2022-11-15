import { sveltekit } from '@sveltejs/kit/vite'
import 'dotenv/config'
import { resolve } from 'path'

const config = {
  plugins: [sveltekit()],
  server: {
    proxy: {
      '/api': {
        target: process.env.PUBLIC_API_URL,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      $: resolve('src'),
      $components: resolve('src/components'),
      $stores: resolve('src/stores')
    }
  }
}

export default config
