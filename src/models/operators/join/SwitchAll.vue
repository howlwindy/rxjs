<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'switchAll<O extends ObservableInput<any>>(): OperatorFunction<O, ObservedValueOf<O>>',
]
</script>
<template>
  <h4><code>switchAll</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
