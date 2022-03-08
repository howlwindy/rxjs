<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'every<T>(predicate: BooleanConstructor): OperatorFunction<T, Exclude<T, Falsy> extends never ? false : boolean>',
  'every<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean): OperatorFunction<T, boolean>'
]
</script>
<template>
  <h4><code>every</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
