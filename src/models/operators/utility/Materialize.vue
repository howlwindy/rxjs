<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'materialize<T>(): OperatorFunction<T, Notification<T> & ObservableNotification<T>>',
]
</script>
<template>
  <h4><code>materialize</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
