<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'debounce<T>(durationSelector: (value: T) => ObservableInput<any>): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>debounce</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
