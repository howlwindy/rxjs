<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'skipLast<T>(skipCount: number): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>skipLast</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
