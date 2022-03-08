<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'share<T>(): MonoTypeOperatorFunction<T>',
  'share<T>(options: ShareConfig<T>): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>share</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
