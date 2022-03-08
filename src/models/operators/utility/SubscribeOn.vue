<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'subscribeOn<T>(scheduler: SchedulerLike, delay?: number): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>subscribeOn</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
