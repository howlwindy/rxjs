<script setup lang="ts">
import { ref, watch } from 'vue'
import { iif, of } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'iif<T, F>(condition: () => boolean, trueResult: ObservableInput<T>, falseResult: ObservableInput<F>): Observable<T | F>'
]
const data = ref<string>('init')
const result = ref<string>()
watch(data, (v) =>
  iif(() => v.length > 10, of(v.slice(0, 10)), of(v.slice(10))).subscribe(
    (next) => (result.value = next)
  )
)
</script>
<template>
  <h4><code>iif</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
