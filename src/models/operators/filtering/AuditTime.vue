<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'auditTime<T>(duration: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>auditTime</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
