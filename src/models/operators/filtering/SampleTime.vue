<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'sampleTime<T>(period: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>sampleTime</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
