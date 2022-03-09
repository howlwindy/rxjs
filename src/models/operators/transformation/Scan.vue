<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'scan<V, A = V>(accumulator: (acc: A | V, value: V, index: number) => A): OperatorFunction<V, V | A>',
  'scan<V, A>(accumulator: (acc: A, value: V, index: number) => A, seed: A): OperatorFunction<V, A>',
  'scan<V, A, S>(accumulator: (acc: A | S, value: V, index: number) => A, seed: S): OperatorFunction<V, A>'
]
</script>
<template>
  <h4><code>scan</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
