<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'concatMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>'
]
</script>
<template>
  <h4><code>concatMap</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
