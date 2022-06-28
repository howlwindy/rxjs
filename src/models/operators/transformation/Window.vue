<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'window<T>(windowBoundaries: Observable<any>): OperatorFunction<T, Observable<T>>',
]
</script>
<template>
  <h4><code>window</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
