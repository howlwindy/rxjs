<script setup lang="ts">
import SrcVue from '@/components/Src.vue'
import { Observable, Subscriber, Observer } from 'rxjs'

// const subscription = new Observable<number>((subscriber) => {
//   subscriber.closed
//   subscriber.next()
//   subscriber.error()
//   subscriber.complete()
//   subscriber.remove
//   subscriber.unsubscribe()
//   subscriber.add()
// })
//   .subscribe({
//     next: (v) => console.log(v),
//     error: (e) => console.log(e),
//     complete: () => console.log('complete')
//   })
//   .unsubscribe()

// const observable = new Observable()
// const subscription = observable.subscribe()
// const unsubscription = subscription.unsubscribe()

// import { Subject } from 'rxjs'
// const subject = new Subject()
// const subject = new Subject()

const src = [
  'const observable = new Observable(subscriber: subscriber)',
  'const subscription = observable.subscribe(observer)',
  'const unsubscription = subscription.unsubscribe()',
  'const subject = new Subject()'
]
const observableSrc = [
  '// observable',
  'Observable(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic)',
  'subscribe(observer?: Partial<Observer<T>>): Subscription',
  'subscribe(next: (value: T) => void): Subscription',
  'subscribe(next?: ((value: T) => void) | null, error?: ((error: any) => void) | null, complete?: (() => void) | null): Subscription',
  'forEach(next: (value: T) => void): Promise<void>',
  'forEach(next: (value: T) => void, promiseCtor: PromiseConstructorLike): Promise<void>',
  'pipe(): Observable<T>',
  'pipe<A>(op1: OperatorFunction<T, A>): Observable<A>',
  'pipe<A, B>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>): Observable<B>',
  'pipe<A, B, C>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>): Observable<C>',
  'pipe<A, B, C, D>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>): Observable<D>',
  'pipe<A, B, C, D, E>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>): Observable<E>',
  'pipe<A, B, C, D, E, F>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>): Observable<F>',
  'pipe<A, B, C, D, E, F, G>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>): Observable<G>',
  'pipe<A, B, C, D, E, F, G, H>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>): Observable<H>',
  'pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>): Observable<I>',
  'pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>, ...operations: OperatorFunction<any, any>[]): Observable<unknown>'
]
const subscriberSrc = [
  '// subscriber',
  'closed: boolean',
  'next(value?: T): void',
  'error(err?: any): void',
  'complete(): void',
  'remove(teardown: Exclude<TeardownLogic, void>): void',
  'unsubscribe(): void',
  'add(teardown: TeardownLogic): void'
]
const observerSrc = [
  '// observer',
  'next: (value: T) => void',
  'error: (err: any) => void',
  'complete: () => void'
]
const subscriptionSrc = [
  '// subscription',
  'unsubscribe(): void',
  'add(teardown: TeardownLogic): void',
  'remove(teardown: Exclude<TeardownLogic, void>): void',
  'closed: boolean'
]
const subjectSrc = [
  '// subject',
  'Subject()',
  'asObservable(): Observable<T>',
  'next(value: T): void',
  'error(err: any): void',
  'complete(): void',
  'unsubscribe(): void',
  'observed(): boolean',
  'closed: boolean',
  'forEach <= Observable',
  'pipe <= Observable',
  'subscribe <= Observable'
]
const queueSrc = [
  '// queueScheduler',
  'actions: Array<AsyncAction<any>> <= AsyncScheduler',
  'flush(action: AsyncAction<any>): void <= AsyncScheduler',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler'
]
const asapSrc = [
  '// asapScheduler',
  'actions: Array<AsyncAction<any>> <= AsyncScheduler',
  'flush(action?: AsyncAction<any>): void',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler'
]
const asyncSrc = [
  '// asyncScheduler',
  'actions: Array<AsyncAction<any>>',
  'flush(action: AsyncAction<any>): void',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler'
]
const animationSrc = [
  '// animationFrameScheduler',
  'actions: Array<AsyncAction<any>> <= AsyncScheduler',
  'flush(action?: AsyncAction<any>): void',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler'
]

const subscribe = (subscriber: Subscriber<number>) => {
  subscriber.closed = false
  subscriber.next(0)
  subscriber.next(1)
  subscriber.next(2)
  subscriber.complete()
}
const observable$ = new Observable(subscribe)
const observer: Observer<number> = {
  next: (v) => console.log(v),
  error: (e) => console.log(e),
  complete: () => console.log('complete')
}
const subscription = observable$.subscribe(observer)
observable$.subscribe((v) => console.log(v))
const unsubscription = subscription.unsubscribe()
console.log(unsubscription)
</script>
<template>
  <h2>observable subscriber observer subscription subject scheduler</h2>
  <SrcVue :data="src"></SrcVue>
  <SrcVue :data="observableSrc"></SrcVue>
  <SrcVue :data="subscriberSrc"></SrcVue>
  <SrcVue :data="observerSrc"></SrcVue>
  <SrcVue :data="subscriptionSrc"></SrcVue>
  <SrcVue :data="subjectSrc"></SrcVue>
  <SrcVue :data="queueSrc"></SrcVue>
  <SrcVue :data="asapSrc"></SrcVue>
  <SrcVue :data="asyncSrc"></SrcVue>
  <SrcVue :data="animationSrc"></SrcVue>
</template>
<style scoped></style>
