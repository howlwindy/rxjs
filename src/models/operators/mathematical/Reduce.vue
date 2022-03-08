<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'reduce<V, A = V>(accumulator: (acc: A | V, value: V, index: number) => A): OperatorFunction<V, V | A>',
  'reduce<V, A>(accumulator: (acc: A, value: V, index: number) => A, seed: A): OperatorFunction<V, A>',
  'reduce<V, A, S = A>(accumulator: (acc: A | S, value: V, index: number) => A, seed: S): OperatorFunction<V, A>'
]
</script>
<template>
  <h4><code>reduce</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
