<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'forkJoin<T extends AnyCatcher>(arg: T): Observable<unknown>',
  'forkJoin(scheduler: null | undefined): Observable<never>',
  'forkJoin(sources: readonly []): Observable<never>',
  'forkJoin<A extends readonly unknown[]>(sources: readonly [...ObservableInputTuple<A>]): Observable<A>',
  'forkJoin<A extends readonly unknown[], R>(sources: readonly [...ObservableInputTuple<A>], resultSelector: (...values: A) => R): Observable<R>',
  'forkJoin(sourcesObject: {[K in any]: never}): Observable<never>',
  'forkJoin<T extends Record<string, ObservableInput<any>>>(sourcesObject: T): Observable<{[K in keyof T]: ObservedValueOf<T[K]>}>'
]
</script>
<template>
  <h4><code>forkJoin</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
