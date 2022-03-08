<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'defer<R extends ObservableInput<any>>(observableFactory: () => R): Observable<ObservedValueOf<R>>'
]
</script>
<template>
  <h4><code>defer</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
