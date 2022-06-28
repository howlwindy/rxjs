<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'

import { routes } from './router/routes'

interface INav {
  label: string
  done?: string | number
  count?: string | number
  route: string
  level: number
}

const nav: INav[] = []

const recursive = (arr: RouteRecordRaw[], route = '', level = 0) => {
  arr.map((v) => {
    nav.push({
      label: `${v.path[0] === '/' ? v.path.slice(1) : v.path}`,
      done: v.meta?.done,
      count: v.meta?.count,
      route: `${route}${v.path[0] === '/' ? '' : '/'}${v.path}`,
      level,
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
      style="text-decoration: none"
      :style="{
        marginLeft: `${v.level * 15}px`,
        padding: '2px 5px',
      }"
      :to="v.route"
    >
      <code
        >{{ v.label || '/' }}
        <span v-if="v.count">- </span>
        <span
          v-if="v.count === v.done"
          style="font-size: 20px; font-weight: bold; color: #009fab"
          >{{ v.count }}</span
        >
        <span
          v-if="v.count !== v.done"
          :style="{
            fontSize: '14px',
            fontWeight: 'bold',
            color: v.done === v.count ? '#000' : '#ffa843',
          }"
          >{{ v.done }}</span
        >
        <span v-if="v.count">/</span>
        <span
          v-if="v.count !== v.done"
          :style="{
            fontSize: '16px',
            fontWeight: 'bold',
            color: v.done === v.count ? '#000' : '#ff522a',
          }"
          >{{ v.count }}</span
        >
      </code>
    </router-link>
  </section>
  <section
    style="
      flex: 1;
      height: 100vh;
      padding-left: 20px;
      overflow-x: hidden;
      overflow-y: scroll;
    "
  >
    <suspense>
      <router-view></router-view>
    </suspense>
  </section>
</template>

<style scoped></style>
