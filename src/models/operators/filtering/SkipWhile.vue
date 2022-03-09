<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'skipWhile<T>(predicate: BooleanConstructor): OperatorFunction<T, Extract<T, Falsy> extends never ? never : T>',
  'skipWhile<T>(predicate: (value: T, index: number) => true): OperatorFunction<T, never>',
  'skipWhile<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>skipWhile</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
