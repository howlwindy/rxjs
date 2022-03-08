<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'generate<S>(options: GenerateBaseOptions<S>): Observable<S>',
  'generate<T, S>(options: GenerateOptions<T, S>): Observable<T>'
]
</script>
<template>
  <h4><code>generate</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
