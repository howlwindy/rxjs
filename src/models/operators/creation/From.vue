<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'from<O extends ObservableInput<any>>(input: O): Observable<ObservedValueOf<O>>',
  'from<O extends ObservableInput<any>>(input: O, scheduler: SchedulerLike | undefined): Observable<ObservedValueOf<O>>'
]
</script>
<template>
  <h4><code>from</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
