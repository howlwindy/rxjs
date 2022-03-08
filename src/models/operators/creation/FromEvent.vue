<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
const src: string[] = [
  'fromEvent<T>(target: HasEventTargetAddRemove<T> | ArrayLike<HasEventTargetAddRemove<T>>, eventName: string): Observable<T>',
  'fromEvent<T, R>(target: HasEventTargetAddRemove<T> | ArrayLike<HasEventTargetAddRemove<T>>, eventName: string, resultSelector: (event: T) => R): Observable<R>',
  'fromEvent<T>(target: HasEventTargetAddRemove<T> | ArrayLike<HasEventTargetAddRemove<T>>, eventName: string, options: EventListenerOptions): Observable<T>',
  'fromEvent<T, R>(target: HasEventTargetAddRemove<T> | ArrayLike<HasEventTargetAddRemove<T>>, eventName: string, options: EventListenerOptions, resultSelector: (event: T) => R): Observable<R>',
  'fromEvent(target: NodeStyleEventEmitter | ArrayLike<NodeStyleEventEmitter>, eventName: string): Observable<unknown>',
  'fromEvent<R>(target: NodeStyleEventEmitter | ArrayLike<NodeStyleEventEmitter>, eventName: string, resultSelector: (...args: any[]) => R): Observable<R>',
  'fromEvent(target: NodeCompatibleEventEmitter | ArrayLike<NodeCompatibleEventEmitter>, eventName: string): Observable<unknown>',
  'fromEvent<R>(target: NodeCompatibleEventEmitter | ArrayLike<NodeCompatibleEventEmitter>, eventName: string, resultSelector: (...args: any[]) => R): Observable<R>',
  'fromEvent<T>(target: JQueryStyleEventEmitter<any, T> | ArrayLike<JQueryStyleEventEmitter<any, T>>, eventName: string): Observable<T>',
  'fromEvent<T, R>(target: JQueryStyleEventEmitter<any, T> | ArrayLike<JQueryStyleEventEmitter<any, T>>, eventName: string, resultSelector: (value: T, ...args: any[]) => R): Observable<R>'
]
</script>
<template>
  <h4><code>fromEvent</code></h4>
  <SrcVue :data="src"></SrcVue>
</template>
<style scoped></style>
