<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = ['ignoreElements(): OperatorFunction<unknown, never>']
</script>
<template>
  <h4><code>ignoreElements</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
