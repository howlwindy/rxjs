<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'zip<A extends readonly unknown[]>(sources: [...ObservableInputTuple<A>]): Observable<A>',
  'zip<A extends readonly unknown[], R>(sources: [...ObservableInputTuple<A>], resultSelector: (...values: A) => R): Observable<R>',
  'zip<A extends readonly unknown[]>(...sources: [...ObservableInputTuple<A>]): Observable<A>',
  'zip<A extends readonly unknown[], R>(...sourcesAndResultSelector: [...ObservableInputTuple<A>, (...values: A) => R]): Observable<R>'
]
</script>
<template>
  <h4><code>zip</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
