<script setup lang="ts">
import SrcVue from '@/components/Src.vue'

// import {
//   Observable,
//   Subscriber,
//   Observer,
//   Subject,
//   BehaviorSubject,
//   ReplaySubject,
//   AsyncSubject
// } from 'rxjs'

const src = [
  `// observable单播，hot直播，cold点播；subject多播
const subscriber = (subscriber: Subscriber<string>) => { // operators的重要api
  subscriber.next('observable value')
  // subscriber.error(e?: any)
  // subscriber.complete()
}
const observable$ = new Observable(subscriber)
const observer: Observer<string> = {
  next: (v) => console.log(v),
  error: (e) => console.log(e),
  complete: () => console.log('complete')
}
console.log('----> observable')
const subscriptionO0 = observable$.subscribe(observer)
const unsubscriptionO0 = subscriptionO0.unsubscribe()
const subscriptionO1 = observable$.subscribe(observer)
const unsubscriptionO1 = subscriptionO1.unsubscribe()
// ----> observable
// observable value
// observable value

const subject = new Subject<string>()
const subscriptionS0 = subject.subscribe(observer)
const subscriptionS1 = subject.subscribe(observer)

console.log('----> subject')
subject.next('subject value')
// ----> subject
// 2 subject value`,
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
  'pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>, ...operations: OperatorFunction<any, any>[]): Observable<unknown>',
]
const subscriberSrc = [
  '// subscriber',
  'closed: boolean',
  'next(value?: T): void',
  'error(err?: any): void',
  'complete(): void',
  'remove(teardown: Exclude<TeardownLogic, void>): void',
  'unsubscribe(): void',
  'add(teardown: TeardownLogic): void',
]
const observerSrc = [
  '// observer',
  'next: (value: T) => void',
  'error: (err: any) => void',
  'complete: () => void',
]
const subscriptionSrc = [
  '// subscription',
  'unsubscribe(): void',
  'add(teardown: TeardownLogic): void',
  'remove(teardown: Exclude<TeardownLogic, void>): void',
  'closed: boolean',
]
const subjectSrc = [
  '// subject，直播',
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
  'subscribe <= Observable',
]
const behaviorSubjectSrc = [
  '// behaviorSubject，只记住最新值',
  'asObservable(): Observable<T>',
  'next(value: T): void',
  'error(err: any): void',
  'complete(): void',
  'unsubscribe(): void',
  'observed(): boolean',
  'closed: boolean',
  'forEach <= Observable',
  'pipe <= Observable',
  'subscribe <= Observable',
  'value(): T',
  'getValue(): T',
]
const replaySubjectSrc = [
  '// replaySubject，点播',
  'asObservable(): Observable<T>',
  'next(value: T): void',
  'error(err: any): void',
  'complete(): void',
  'unsubscribe(): void',
  'observed(): boolean',
  'closed: boolean',
  'forEach <= Observable',
  'pipe <= Observable',
  'subscribe <= Observable',
]
const asyncSubjectSrc = [
  '// asyncSubject，complete时推送值且之后不再推送',
  'asObservable(): Observable<T>',
  'next(value: T): void',
  'error(err: any): void',
  'complete(): void',
  'unsubscribe(): void',
  'observed(): boolean',
  'closed: boolean',
  'forEach <= Observable',
  'pipe <= Observable',
  'subscribe <= Observable',
]
const queueSrc = [
  '// queueScheduler',
  'actions: Array<AsyncAction<any>> <= AsyncScheduler',
  'flush(action: AsyncAction<any>): void <= AsyncScheduler',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler',
]
const asapSrc = [
  '// asapScheduler',
  'actions: Array<AsyncAction<any>> <= AsyncScheduler',
  'flush(action?: AsyncAction<any>): void',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler',
]
const asyncSrc = [
  '// asyncScheduler',
  'actions: Array<AsyncAction<any>>',
  'flush(action: AsyncAction<any>): void',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler',
]
const animationSrc = [
  '// animationFrameScheduler',
  'actions: Array<AsyncAction<any>> <= AsyncScheduler',
  'flush(action?: AsyncAction<any>): void',
  'now: () => number <= Scheduler',
  'schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription <= Scheduler',
]

// const subscriber = (subscriber: Subscriber<string>) => {
//   subscriber.next('observable value')
//   // subscriber.error(e?: any)
//   // subscriber.complete()
// }
// const observable$ = new Observable(subscriber)
// const observer: Observer<string> = {
//   next: (v) => console.log(v),
//   error: (e) => console.log(e),
//   complete: () => console.log('complete')
// }
// console.log('----> observable')
// const subscriptionO0 = observable$.subscribe(observer)
// const unsubscriptionO0 = subscriptionO0.unsubscribe()
// const subscriptionO1 = observable$.subscribe(observer)
// const unsubscriptionO1 = subscriptionO1.unsubscribe()

// const subject = new Subject<string>()
// const subscriptionS0 = subject.subscribe(observer)
// const subscriptionS1 = subject.subscribe(observer)

// console.log('----> subject')
// subject.next('subject value')
</script>
<template>
  <h2>observable subscriber observer subscription subject scheduler</h2>
  <SrcVue :data="src"></SrcVue>
  <SrcVue :data="observableSrc"></SrcVue>
  <SrcVue :data="subscriberSrc"></SrcVue>
  <SrcVue :data="observerSrc"></SrcVue>
  <SrcVue :data="subscriptionSrc"></SrcVue>
  <SrcVue :data="subjectSrc"></SrcVue>
  <SrcVue :data="behaviorSubjectSrc"></SrcVue>
  <SrcVue :data="replaySubjectSrc"></SrcVue>
  <SrcVue :data="asyncSubjectSrc"></SrcVue>
  <SrcVue :data="queueSrc"></SrcVue>
  <SrcVue :data="asapSrc"></SrcVue>
  <SrcVue :data="asyncSrc"></SrcVue>
  <SrcVue :data="animationSrc"></SrcVue>
</template>
<style scoped></style>
