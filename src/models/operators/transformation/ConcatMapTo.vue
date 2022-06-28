<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'concatMapTo<O extends ObservableInput<unknown>>(observable: O): OperatorFunction<unknown, ObservedValueOf<O>>',
]
</script>
<template>
  <h4><code>concatMapTo</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
