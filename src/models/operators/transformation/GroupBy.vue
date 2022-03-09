<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'groupBy<T, K>(key: (value: T) => K, options: BasicGroupByOptions<K, T>): OperatorFunction<T, GroupedObservable<K, T>>',
  'groupBy<T, K, E>(key: (value: T) => K, options: GroupByOptionsWithElement<K, E, T>): OperatorFunction<T, GroupedObservable<K, E>>',
  'groupBy<T, K extends T>(key: (value: T) => value is K): OperatorFunction<T, GroupedObservable<true, K> | GroupedObservable<false, Exclude<T, K>>>',
  'groupBy<T, K>(key: (value: T) => K): OperatorFunction<T, GroupedObservable<K, T>>'
]
</script>
<template>
  <h4><code>groupBy</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
