import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    count?: string | number
    done?: string | number
  }
}
