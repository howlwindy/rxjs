<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'single<T>(predicate: BooleanConstructor): OperatorFunction<T, TruthyTypesOf<T>>',
  'single<T>(predicate?: (value: T, index: number, source: Observable<T>) => boolean): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>single</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
