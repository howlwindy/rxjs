<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'debounceTime<T>(dueTime: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>debounceTime</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
