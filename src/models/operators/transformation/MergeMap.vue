<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'mergeMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, concurrent?: number): OperatorFunction<T, ObservedValueOf<O>>',
]
</script>
<template>
  <h4><code>mergeMap</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
