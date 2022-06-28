<script setup lang="ts">
import { of, partition } from 'rxjs'
import { ref, watch } from 'vue'

import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'partition<T, U extends T, A>(source: ObservableInput<T>, predicate: (this: A, value: T, index: number) => value is U, thisArg: A): [Observable<U>, Observable<Exclude<T, U>>]',
  'partition<T, U extends T>(source: ObservableInput<T>, predicate: (value: T, index: number) => value is U): [Observable<U>, Observable<Exclude<T, U>>]',
  'partition<T>(source: ObservableInput<T>, predicate: (value: T, index: number) => boolean): [Observable<T>, Observable<T>]',
]
const data = ref<string>('')
const result0 = ref<string>()
const result1 = ref<string>()
watch(data, (v) => {
  const v$ = of(...v.split(' '))
  const [event$, odd$] = partition(v$, (v) => v.length % 2 === 0)
  event$.subscribe((next) => (result0.value = next))
  odd$.subscribe((next) => (result1.value = next))
})
</script>
<template>
  <h4><code>partition</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result0 = {{ result0 }}</pre>
  <pre>result1 = {{ result1 }}</pre>
</template>
<style scoped></style>
