<script setup lang="ts">
import { ref, watch } from 'vue'
import { defer } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'defer<R extends ObservableInput<any>>(observableFactory: () => R): Observable<ObservedValueOf<R>>'
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) =>
  defer(() => v || '').subscribe((next) => (result.value = next))
)
</script>
<template>
  <h4><code>defer</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
