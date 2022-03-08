<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = ['throwError(errorFactory: () => any): Observable<never>']
</script>
<template>
  <h4><code>throwError</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
