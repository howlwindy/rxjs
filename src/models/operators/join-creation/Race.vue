<script setup lang="ts">
import { ref, watch } from 'vue'
import { of, race } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'race<T extends readonly unknown[]>(inputs: [...ObservableInputTuple<T>]): Observable<T[number]>',
  'race<T extends readonly unknown[]>(...inputs: [...ObservableInputTuple<T>]): Observable<T[number]>'
]
const data0 = ref<string>('')
const data1 = ref<string>('')
const result = ref<string>()
watch([data0, data1], (v) =>
  race(of(v[0]), of(v[1])).subscribe((next) => (result.value = next))
)
</script>
<template>
  <h4><code>race</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data0" type="text" />
  <input v-model="data1" type="text" />
  <pre>data0 = {{ data0 }}</pre>
  <pre>data1 = {{ data1 }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
