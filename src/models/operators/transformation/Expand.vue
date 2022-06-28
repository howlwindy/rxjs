<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'expand<T, O extends ObservableInput<unknown>>(project: (value: T, index: number) => O, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, ObservedValueOf<O>>',
]
</script>
<template>
  <h4><code>expand</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
