<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'windowCount<T>(windowSize: number, startWindowEvery?: number): OperatorFunction<T, Observable<T>>',
]
</script>
<template>
  <h4><code>windowCount</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
