<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'bufferToggle<T, O>(openings: ObservableInput<O>, closingSelector: (value: O) => ObservableInput<any>): OperatorFunction<T, T[]>',
]
</script>
<template>
  <h4><code>bufferToggle</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
