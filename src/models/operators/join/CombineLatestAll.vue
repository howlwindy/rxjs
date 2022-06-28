<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'combineLatestAll<T>(): OperatorFunction<ObservableInput<T>, T[]>',
  'combineLatestAll<T>(): OperatorFunction<any, T[]>',
  'combineLatestAll<T, R>(project: (...values: T[]) => R): OperatorFunction<ObservableInput<T>, R>',
  'combineLatestAll<R>(project: (...values: Array<any>) => R): OperatorFunction<any, R>',
]
</script>
<template>
  <h4><code>combineLateatAll</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
