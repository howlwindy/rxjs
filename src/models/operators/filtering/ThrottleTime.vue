<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  `throttleTime<T>(duration: number, scheduler?: SchedulerLike, config?: ThrottleConfig).ThrottleConfig): MonoTypeOperatorFunction<T>`
]
</script>
<template>
  <h4><code>throttleTime</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
