<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'windowTime<T>(windowTimeSpan: number, scheduler?: SchedulerLike): OperatorFunction<T, Observable<T>>',
  'windowTime<T>(windowTimeSpan: number, windowCreationInterval: number, scheduler?: SchedulerLike): OperatorFunction<T, Observable<T>>',
  'windowTime<T>(windowTimeSpan: number, windowCreationInterval: number | null | void, maxWindowSize: number, scheduler?: SchedulerLike): OperatorFunction<T, Observable<T>>',
]
</script>
<template>
  <h4><code>windowTime</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
