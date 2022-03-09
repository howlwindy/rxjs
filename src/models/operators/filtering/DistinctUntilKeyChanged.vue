<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'distinctUntilKeyChanged<T>(key: keyof T): MonoTypeOperatorFunction<T>',
  'distinctUntilKeyChanged<T, K extends keyof T>(key: K, compare: (x: T[K], y: T[K]) => boolean): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>distinctUntilKeyChanged</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
