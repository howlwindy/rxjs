<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'timer(due: number | Date, scheduler?: SchedulerLike): Observable<0>',
  'timer(startDue: number | Date, intervalDuration: number, scheduler?: SchedulerLike): Observable<number>'
]
</script>
<template>
  <h4><code>timer</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
