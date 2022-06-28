<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'takeWhile<T>(predicate: BooleanConstructor, inclusive: true): MonoTypeOperatorFunction<T>',
  'takeWhile<T>(predicate: BooleanConstructor, inclusive: false): OperatorFunction<T, TruthyTypesOf<T>>',
  'takeWhile<T>(predicate: BooleanConstructor): OperatorFunction<T, TruthyTypesOf<T>>',
  'takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S): OperatorFunction<T, S>',
  'takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S, inclusive: false): OperatorFunction<T, S>',
  'takeWhile<T>(predicate: (value: T, index: number) => boolean, inclusive?: boolean): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>takeWhile</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
