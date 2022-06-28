<script setup lang="ts">
import { timer } from 'rxjs'
import { ref, watch } from 'vue'

import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'timer(due: number | Date, scheduler?: SchedulerLike): Observable<0>',
  'timer(startDue: number | Date, intervalDuration: number, scheduler?: SchedulerLike): Observable<number>',
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) =>
  timer(500, 500).subscribe((next) => (result.value = `${v} ${next}`))
)
</script>
<template>
  <h4><code>timer</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
