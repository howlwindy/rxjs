<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'elementAt<T, D = T>(index: number, defaultValue?: D): OperatorFunction<T, T | D>'
]
</script>
<template>
  <h4><code>elementAt</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
