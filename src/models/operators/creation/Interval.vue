<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'interval(period?: number, scheduler?: SchedulerLike): Observable<number>'
]
</script>
<template>
  <h4><code>interval</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
