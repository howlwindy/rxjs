<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'timestamp<T>(timestampProvider?: TimestampProvider): OperatorFunction<T, Timestamp<T>>'
]
</script>
<template>
  <h4><code>timestamp</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
