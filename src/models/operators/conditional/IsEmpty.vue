<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = ['isEmpty<T>(): OperatorFunction<T, boolean>']
</script>
<template>
  <h4><code>isEmpty</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
