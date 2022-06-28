<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'retryWhen<T>(notifier: (errors: Observable<any>) => Observable<any>): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>retryWhen</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
