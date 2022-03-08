<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'merge<A extends readonly unknown[]>(...sources: [...ObservableInputTuple<A>]): Observable<A[number]>',
  'merge<A extends readonly unknown[]>(...sourcesAndConcurrency: [...ObservableInputTuple<A>, number?]): Observable<A[number]>'
]
</script>
<template>
  <h4><code>merge</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
