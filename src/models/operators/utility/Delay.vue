<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'delay<T>(due: number | Date, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>delay</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
