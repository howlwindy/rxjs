<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>skipUntil</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
