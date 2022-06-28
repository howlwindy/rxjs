<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'bufferTime<T>(bufferTimeSpan: number, scheduler?: SchedulerLike): OperatorFunction<T, T[]>',
  'bufferTime<T>(bufferTimeSpan: number, bufferCreationInterval: number | null | undefined, scheduler?: SchedulerLike): OperatorFunction<T, T[]>',
  'bufferTime<T>(bufferTimeSpan: number, bufferCreationInterval: number | null | undefined, maxBufferSize: number, scheduler?: SchedulerLike): OperatorFunction<T, T[]>',
]
</script>
<template>
  <h4><code>bufferTime</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
