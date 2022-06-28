<script setup lang="ts">
import { of, zip } from 'rxjs'
import { ref, watch } from 'vue'

import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'zip<A extends readonly unknown[]>(sources: [...ObservableInputTuple<A>]): Observable<A>',
  'zip<A extends readonly unknown[], R>(sources: [...ObservableInputTuple<A>], resultSelector: (...values: A) => R): Observable<R>',
  'zip<A extends readonly unknown[]>(...sources: [...ObservableInputTuple<A>]): Observable<A>',
  'zip<A extends readonly unknown[], R>(...sourcesAndResultSelector: [...ObservableInputTuple<A>, (...values: A) => R]): Observable<R>',
]
const data0 = ref<string>('')
const data1 = ref<string>('')
const result = ref<string[]>()
watch([data0, data1], (v) =>
  zip(v.map((v) => of(v))).subscribe((next) => (result.value = next))
)
</script>
<template>
  <h4><code>zip</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data0" type="text" />
  <input v-model="data1" type="text" />
  <pre>data = {{ data0 }}</pre>
  <pre>data = {{ data1 }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
