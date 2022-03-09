<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'distinct<T, K>(keySelector?: (value: T) => K, flushes?: Observable<any>): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>distinct</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
