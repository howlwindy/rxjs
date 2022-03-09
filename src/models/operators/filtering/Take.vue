<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = ['take<T>(count: number): MonoTypeOperatorFunction<T>']
</script>
<template>
  <h4><code>take</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
