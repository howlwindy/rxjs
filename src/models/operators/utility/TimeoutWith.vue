<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'timeoutWith<T, R>(dueBy: Date, switchTo: ObservableInput<R>, scheduler?: SchedulerLike): OperatorFunction<T, T | R>'
]
</script>
<template>
  <h4><code>timeoutWith</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
