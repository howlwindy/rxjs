<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'observeOn<T>(scheduler: SchedulerLike, delay?: number): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>observeOn</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
