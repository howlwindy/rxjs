<script setup lang="ts">
import { ref, watch } from 'vue'
import { generate } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'generate<S>(options: GenerateBaseOptions<S>): Observable<S>',
  'generate<T, S>(options: GenerateOptions<T, S>): Observable<T>'
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) =>
  generate(
    v,
    (val) => (val || '') === 'b',
    (val) => val + '3'
  ).subscribe((next) => (result.value = next))
)
</script>
<template>
  <h4><code>generate</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
