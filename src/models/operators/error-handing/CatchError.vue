<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>',
]
</script>
<template>
  <h4><code>catchError</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
