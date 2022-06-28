import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import './index.css'
import { router } from './router'

const app = createApp(App)

app.directive('highlight', (el) => {
  el.querySelectorAll('pre code').forEach((v: any) => hljs.highlightBlock(v))
})

app.use(router).use(createPinia()).mount('#app')
