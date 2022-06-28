<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'bufferWhen<T>(closingSelector: () => ObservableInput<any>): OperatorFunction<T, T[]>',
]
</script>
<template>
  <h4><code>bufferWhen</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
