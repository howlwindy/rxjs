<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'max<T>(comparer?: (x: T, y: T) => number): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>max</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
