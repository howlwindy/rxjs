<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'windowToggle<T, O>(openings: ObservableInput<O>, closingSelector: (openValue: O) => ObservableInput<any>): OperatorFunction<T, Observable<T>>'
]
</script>
<template>
  <h4><code>windowToggle</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
