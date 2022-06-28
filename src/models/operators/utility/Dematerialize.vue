<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'dematerialize<N extends ObservableNotification<any>>(): OperatorFunction<N, ValueFromNotification<N>>',
]
</script>
<template>
  <h4><code>dematerialize</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
