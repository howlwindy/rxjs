<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'takeLast<T>(count: number): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>takeLast</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
