<script setup lang="ts">
import { ref, watch } from 'vue'
import { concat } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'concat<T extends readonly unknown[]>(...inputs: [...ObservableInputTuple<T>]): Observable<T[number]>',
  'concat<T extends readonly unknown[]>(...inputsAndScheduler: [...ObservableInputTuple<T>, SchedulerLike]): Observable<T[number]>'
]
const data = ref<string>('')
const result = ref<string>()
watch(data, (v) => concat(v).subscribe((next) => (result.value = next)))
</script>
<template>
  <h4><code>concat</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
