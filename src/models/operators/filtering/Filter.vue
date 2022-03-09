<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'filter<T, S extends T>(predicate: (value: T, index: number) => value is S): OperatorFunction<T, S>',
  'filter<T>(predicate: BooleanConstructor): OperatorFunction<T, TruthyTypesOf<T>>',
  'filter<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>filter</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
