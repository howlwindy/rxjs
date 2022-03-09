<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'switchScan<T, R, O extends ObservableInput<any>>(accumulator: (acc: R, value: T, index: number) => O, seed: R): OperatorFunction<T, ObservedValueOf<O>>'
]
</script>
<template>
  <h4><code>switchScan</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
