<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'first<T, D = T>(predicate?: null, defaultValue?: D): OperatorFunction<T, T | D>',
  'first<T>(predicate: BooleanConstructor): OperatorFunction<T, TruthyTypesOf<T>>',
  'first<T, D>(predicate: BooleanConstructor, defaultValue: D): OperatorFunction<T, TruthyTypesOf<T> | D>',
  'first<T, S extends T>(predicate: (value: T, index: number, source: Observable<T>) => value is S, defaultValue?: S): OperatorFunction<T, S>',
  'first<T, S extends T, D>(predicate: (value: T, index: number, source: Observable<T>) => value is S, defaultValue: D): OperatorFunction<T, S | D>',
  'first<T, D = T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>',
]
</script>
<template>
  <h4><code>first</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
