<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'distinctUntilChanged<T>(comparator?: (previous: T, current: T) => boolean): MonoTypeOperatorFunction<T>',
  'distinctUntilChanged<T, K>(comparator: (previous: K, current: K) => boolean, keySelector: (value: T) => K): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>distinctUntilChanged</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
