import * as VueRouter from 'vue-router'
import './router.extend'
import { routes } from './routes'

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes()
})
