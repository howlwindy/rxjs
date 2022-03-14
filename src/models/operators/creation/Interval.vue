<script setup lang="ts">
import { ref, watch } from 'vue'
import { interval } from 'rxjs'
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'interval(period?: number, scheduler?: SchedulerLike): Observable<number>'
]
const data = ref<string>()
const result = ref<string>()
watch(data, (v) =>
  interval(500).subscribe((next) => (result.value = `${v} ${next}`))
)
</script>
<template>
  <h4><code>interval</code></h4>
  <SrcVue :data="src"></SrcVue>
  <input v-model="data" type="text" />
  <pre>data = {{ data }}</pre>
  <pre>result = {{ result }}</pre>
</template>
<style scoped></style>
