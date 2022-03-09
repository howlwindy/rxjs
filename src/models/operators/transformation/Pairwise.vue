<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = ['pairwise<T>(): OperatorFunction<T, [T, T]>']
</script>
<template>
  <h4><code>pairwise</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
