<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'timeout<T, O extends ObservableInput<unknown>, M = unknown>(config: TimeoutConfig<T, O, M> & {with: (info: TimeoutInfo<T, M>) => O',
  `timeout<T, M = unknown>(config: Omit<TimeoutConfig<T, any, M>, 'with'>): OperatorFunction<T, T>`,
  'timeout<T>(first: Date, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>',
  'timeout<T>(each: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>'
]
</script>
<template>
  <h4><code>timeout</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
