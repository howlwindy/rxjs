<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'switchMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>'
]
</script>
<template>
  <h4><code>switchMap</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
