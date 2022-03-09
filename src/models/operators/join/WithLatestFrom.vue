<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'withLatestFrom<T, O extends unknown[]>(...inputs: [...ObservableInputTuple<O>]): OperatorFunction<T, [T, ...O]>',
  'withLatestFrom<T, O extends unknown[], R>(...inputs: [...ObservableInputTuple<O>, (...value: [T, ...O]) => R]): OperatorFunction<T, R>'
]
</script>
<template>
  <h4><code>withLatestFrom</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
