<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'find<T>(predicate: BooleanConstructor): OperatorFunction<T, TruthyTypesOf<T>>',
  'find<T, S extends T>(predicate: (value: T, index: number, source: Observable<T>) => value is S): OperatorFunction<T, S | undefined>',
  'find<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean): OperatorFunction<T, T | undefined>',
]
</script>
<template>
  <h4><code>find</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
