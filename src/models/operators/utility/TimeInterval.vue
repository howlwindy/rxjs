<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'timeInterval<T>(scheduler?: SchedulerLike): OperatorFunction<T, TimeInterval<T>>',
]
</script>
<template>
  <h4><code>timeInterval</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
