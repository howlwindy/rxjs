<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'of(value: null): Observable<null>',
  'of(value: undefined): Observable<undefined>',
  'of(): Observable<never>',
  'of<T>(value: T): Observable<T>',
  'of<A extends readonly unknown[]>(...values: A): Observable<ValueFromArray<A>>'
]
</script>
<template>
  <h4><code>of</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
