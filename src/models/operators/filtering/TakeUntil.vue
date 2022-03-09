<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'takeUntil<T>(notifier: ObservableInput<any>): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>takeUntil</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
