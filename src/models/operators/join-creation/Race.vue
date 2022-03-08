<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'race<T extends readonly unknown[]>(inputs: [...ObservableInputTuple<T>]): Observable<T[number]>',
  'race<T extends readonly unknown[]>(...inputs: [...ObservableInputTuple<T>]): Observable<T[number]>'
]
</script>
<template>
  <h4><code>race</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
