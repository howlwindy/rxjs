<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'audit<T>(durationSelector: (value: T) => ObservableInput<any>): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>audit</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
