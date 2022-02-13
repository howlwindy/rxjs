import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

import './index.css'

createApp(App).use(router).use(createPinia()).mount('#app')
