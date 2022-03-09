<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'mergeMapTo<O extends ObservableInput<unknown>>(innerObservable: O, concurrent?: number): OperatorFunction<unknown, ObservedValueOf<O>>'
]
</script>
<template>
  <h4><code>mergeMapTo</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
