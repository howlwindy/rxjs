<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'mergeAll<O extends ObservableInput<any>>(concurrent?: number): OperatorFunction<O, ObservedValueOf<O>>'
]
</script>
<template>
  <h4><code>mergeAll</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
