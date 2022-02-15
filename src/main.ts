import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'highlight.js/styles/sunburst.css'
import hljs from 'highlight.js'

import './index.css'

const app = createApp(App)

app.directive('highlight', (el) => {
  el.querySelectorAll('pre code').forEach((v: any) => hljs.highlightBlock(v))
})

app.use(router).use(createPinia()).mount('#app')
