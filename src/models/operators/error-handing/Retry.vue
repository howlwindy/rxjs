<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'retry<T>(count?: number): MonoTypeOperatorFunction<T>',
  'retry<T>(config: RetryConfig): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>retry</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
