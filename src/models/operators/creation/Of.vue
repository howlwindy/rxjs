<script setup lang="ts">
import { ref, watch } from 'vue'
import { of } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'of(value: null): Observable<null>',
  'of(value: undefined): Observable<undefined>',
  'of(): Observable<never>',
  'of<T>(value: T): Observable<T>',
  'of<A extends readonly unknown[]>(...values: A): Observable<ValueFromArray<A>>'
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) => of(v).subscribe((next) => (result.value = next)))
</script>
<template>
  <h4><code>of</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
