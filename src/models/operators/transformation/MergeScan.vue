<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'mergeScan<T, R>(accumulator: (acc: R, value: T, index: number) => ObservableInput<R>, seed: R, concurrent?: number): OperatorFunction<T, R>',
]
</script>
<template>
  <h4><code>mergeScan</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
