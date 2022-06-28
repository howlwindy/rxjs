<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'last<T>(predicate: BooleanConstructor): OperatorFunction<T, TruthyTypesOf<T>>',
  'last<T, D>(predicate: BooleanConstructor, defaultValue: D): OperatorFunction<T, TruthyTypesOf<T> | D>',
  'last<T, D = T>(predicate?: null, defaultValue?: D): OperatorFunction<T, T | D>',
  'last<T, S extends T>(predicate: (value: T, index: number, source: Observable<T>) => value is S, defaultValue?: S): OperatorFunction<T, S>',
  'last<T, D = T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>',
]
</script>
<template>
  <h4><code>last</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
