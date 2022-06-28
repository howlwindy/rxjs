<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = ['toArray<T>(): OperatorFunction<T, T[]>']
</script>
<template>
  <h4><code>toArray</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
