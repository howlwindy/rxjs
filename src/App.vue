<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { routes } from './router/routes'

interface INav {
  label: string
  route: string
  level: number
}

const nav: INav[] = []

const recursive = (arr: RouteRecordRaw[], route = '', level = 0) => {
  arr.map((v) => {
    nav.push({
      label: v.path[0] === '/' ? v.path.slice(1) : v.path,
      route: `${route}${v.path[0] === '/' ? '' : '/'}${v.path}`,
      level
    })
    if (v.children) {
      recursive(v.children, v.path, level + 1)
    }
  })
}
recursive(routes())
</script>

<template>
  <section
    style="
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow-y: scroll;
      box-shadow: 10px 0 10px #999;
    "
  >
    <router-link
      v-for="v of nav"
      :key="v.label"
      :style="{
        marginLeft: `${v.level * 15}px`,
        padding: '2px 5px'
      }"
      :to="v.route"
    >
      <code>{{ v.label || '/' }}</code>
    </router-link>
  </section>
  <section style="flex: 1">
    <suspense>
      <router-view></router-view>
    </suspense>
  </section>
</template>

<style scoped></style>
