<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'defaultIfEmpty<T, R>(defaultValue: R): OperatorFunction<T, T | R>'
]
</script>
<template>
  <h4><code>defaultIfEmpty</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
