import { sveltekit } from '@sveltejs/kit/vite'
import 'dotenv/config'
import { resolve } from 'path'

const config = {
  plugins: [sveltekit()],
  server: {
    origin: 'https://double-text.onrender.com'
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
