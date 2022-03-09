<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'bufferCount<T>(bufferSize: number, startBufferEvery?: number | null): OperatorFunction<T, T[]>'
]
</script>
<template>
  <h4><code>bufferCount</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
