<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'exhaustMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>',
]
</script>
<template>
  <h4><code>exhaustMap</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
