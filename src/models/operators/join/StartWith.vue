<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'startWith<T>(value: null): OperatorFunction<T, T | null>',
  'startWith<T>(value: undefined): OperatorFunction<T, T | undefined>',
  'startWith<T, A extends readonly unknown[] = T[]>(...values: A): OperatorFunction<T, T | ValueFromArray<A>>',
]
</script>
<template>
  <h4><code>startWith</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
