<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'range(start: number, count?: number): Observable<number>',
  'range(start: number, count: number | undefined, scheduler: SchedulerLike): Observable<number>'
]
</script>
<template>
  <h4><code>range</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
