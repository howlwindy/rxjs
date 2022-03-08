<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'ajax<T>(config: AjaxConfig): Observable<AjaxResponse<T>>',
  'ajax<T>(url: string): Observable<AjaxResponse<T>>'
]
</script>
<template>
  <h4><code>ajax</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
