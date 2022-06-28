<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any, removeHandler?: (handler: NodeEventHandler, signal?: any) => void): Observable<T>',
  'fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any, removeHandler?: (handler: NodeEventHandler, signal?: any) => void, resultSelector?: (...args: any[]) => T): Observable<T>',
]
</script>
<template>
  <h4><code>fromEventPattern</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
