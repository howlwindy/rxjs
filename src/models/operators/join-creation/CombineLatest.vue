<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'combineLatest<T extends AnyCatcher>(arg: T): Observable<unknown>',
  'combineLatest(sources: []): Observable<never>',
  'combineLatest<A extends readonly unknown[]>(sources: readonly [...ObservableInputTuple<A>]): Observable<A>',
  'combineLatest<A extends readonly unknown[], R>(sources: readonly [...ObservableInputTuple<A>], resultSelector: (...values: A) => R): Observable<R>',
  'combineLatest(sourcesObject: {[K in any]: never}): Observable<never>',
  'combineLatest<T extends Record<string, ObservableInput<any>>>(sourcesObject: T): Observable<{[K in keyof T]: ObservedValueOf<T[K]>}>',
  'combineLatestInit(observables: ObservableInput<any>[], scheduler?: SchedulerLike, valueTransform?: (values: any[]) => any): (subscriber: Subscriber<any>) => void'
]
</script>
<template>
  <h4><code>combineLatest</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
