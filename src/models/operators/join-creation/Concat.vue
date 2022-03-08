<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'concat<T extends readonly unknown[]>(...inputs: [...ObservableInputTuple<T>]): Observable<T[number]>',
  'concat<T extends readonly unknown[]>(...inputsAndScheduler: [...ObservableInputTuple<T>, SchedulerLike]): Observable<T[number]>'
]
</script>
<template>
  <h4><code>concat</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
