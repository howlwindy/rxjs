<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'iif<T, F>(condition: () => boolean, trueResult: ObservableInput<T>, falseResult: ObservableInput<F>): Observable<T | F>'
]
</script>
<template>
  <h4><code>iif</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
