<script setup lang="ts">
import { ref, watch } from 'vue'
import { range } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'range(start: number, count?: number): Observable<number>',
  'range(start: number, count: number | undefined, scheduler: SchedulerLike): Observable<number>'
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) =>
  range(0, v?.length).subscribe((next) => (result.value = `${next}`))
)
</script>
<template>
  <h4><code>range</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
