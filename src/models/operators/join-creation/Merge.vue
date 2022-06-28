<script setup lang="ts">
import { merge } from 'rxjs'
import { ref, watch } from 'vue'

import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'merge<A extends readonly unknown[]>(...sources: [...ObservableInputTuple<A>]): Observable<A[number]>',
  'merge<A extends readonly unknown[]>(...sourcesAndConcurrency: [...ObservableInputTuple<A>, number?]): Observable<A[number]>',
]
const data = ref<string>('')
const result = ref<string>()
watch(data, (v) => merge(v).subscribe((next) => (result.value = next)))
</script>
<template>
  <h4><code>merge</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
