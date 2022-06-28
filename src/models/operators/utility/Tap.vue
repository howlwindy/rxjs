<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'tap<T>(observer?: Partial<TapObserver<T>>): MonoTypeOperatorFunction<T>',
  'tap<T>(next: (value: T) => void): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>tap</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
