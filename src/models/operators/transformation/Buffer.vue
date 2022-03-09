<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'buffer<T>(closingNotifier: Observable<any>): OperatorFunction<T, T[]>'
]
</script>
<template>
  <h4><code>buffer</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
