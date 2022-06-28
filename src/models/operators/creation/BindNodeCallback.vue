<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

const src: string[] = [
  'bindNodeCallback(callbackFunc: (...args: any[]) => void, resultSelector: (...args: any[]) => any, scheduler?: SchedulerLike): (...args: any[]) => Observable<any>',
  'bindNodeCallback<A extends readonly unknown[], R extends readonly unknown[]>(callbackFunc: (...args: [...A, (err: any, ...res: R) => void]) => void, schedulerLike?: SchedulerLike): (...arg: A) => Observable<R extends [] ? void : R extends [any] ? R[0] : R>',
]
</script>
<template>
  <h4><code>bindNodeCallback</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
