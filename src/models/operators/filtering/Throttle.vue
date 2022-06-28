<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'throttle<T>(durationSelector: (value: T) => ObservableInput<any>, config?: ThrottleConfig): MonoTypeOperatorFunction<T>',
]
</script>
<template>
  <h4><code>throttle</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
