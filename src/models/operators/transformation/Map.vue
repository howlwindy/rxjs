<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'map<T, R>(project: (value: T, index: number) => R): OperatorFunction<T, R>',
]
</script>
<template>
  <h4><code>map</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
