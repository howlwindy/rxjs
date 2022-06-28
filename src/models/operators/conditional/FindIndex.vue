<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'findIndex<T>(predicate: BooleanConstructor): OperatorFunction<T, T extends Falsy ? -1 : number>',
  'findIndex<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean): OperatorFunction<T, number>',
]
</script>
<template>
  <h4><code>findIndex</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
