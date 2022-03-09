<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = ['mapTo<R>(value: R): OperatorFunction<unknown, R>']
</script>
<template>
  <h4><code>mapTo</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
