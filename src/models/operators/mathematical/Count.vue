<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'count<T>(predicate?: (value: T, index: number) => boolean): OperatorFunction<T, number>',
]
</script>
<template>
  <h4><code>count</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
