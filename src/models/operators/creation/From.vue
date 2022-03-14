<script setup lang="ts">
import { ref, watch } from 'vue'
import { from } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'from<O extends ObservableInput<any>>(input: O): Observable<ObservedValueOf<O>>',
  'from<O extends ObservableInput<any>>(input: O, scheduler: SchedulerLike | undefined): Observable<ObservedValueOf<O>>'
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) => from(v || '').subscribe((next) => (result.value = next)))
</script>
<template>
  <h4><code>from</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
