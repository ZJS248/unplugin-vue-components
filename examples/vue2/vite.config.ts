import { UserConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import ViteComponents from 'vite-plugin-components'

const config: UserConfig = {
  plugins: [
    createVuePlugin(),
    ViteComponents({
      transformer: 'vue2',
    }),
  ],
}

export default config