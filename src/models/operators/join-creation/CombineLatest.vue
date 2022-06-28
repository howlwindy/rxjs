<script setup lang="ts">
import { combineLatest } from 'rxjs'
import { ref, watch } from 'vue'

import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'combineLatest<T extends AnyCatcher>(arg: T): Observable<unknown>',
  'combineLatest(sources: []): Observable<never>',
  'combineLatest<A extends readonly unknown[]>(sources: readonly [...ObservableInputTuple<A>]): Observable<A>',
  'combineLatest<A extends readonly unknown[], R>(sources: readonly [...ObservableInputTuple<A>], resultSelector: (...values: A) => R): Observable<R>',
  'combineLatest(sourcesObject: {[K in any]: never}): Observable<never>',
  'combineLatest<T extends Record<string, ObservableInput<any>>>(sourcesObject: T): Observable<{[K in keyof T]: ObservedValueOf<T[K]>}>',
  'combineLatestInit(observables: ObservableInput<any>[], scheduler?: SchedulerLike, valueTransform?: (values: any[]) => any): (subscriber: Subscriber<any>) => void',
]
const data = ref<string>('')
const result = ref<string[]>()
watch(data, (v) =>
  combineLatest(v.split(' ')).subscribe((next) => (result.value = next))
)
</script>
<template>
  <h4><code>combineLatest</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
