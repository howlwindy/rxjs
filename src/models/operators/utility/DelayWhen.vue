<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<any>): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>delayWhen</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
