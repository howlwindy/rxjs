<script setup lang="ts">
import { Observable } from 'rxjs'

const subscription = new Observable<number>((subscriber) => {
  subscriber.closed
  subscriber.next()
  subscriber.error()
  subscriber.complete()
  subscriber.remove
  subscriber.unsubscribe()
  subscriber.add()
})
  .subscribe({
    next: (v) => console.log(v),
    error: (e) => console.log(e),
    complete: () => console.log('complete')
  })
  .unsubscribe()
console.log(subscription)

const subscriptionCode = [
  'subscription.closed: boolean',
  'subscription.add(teardown: TeardownLogic): void',
  'subscription.remove(teardown: Exclude<TeardownLogic, void>): void', // 源码 ??
  'subscription.remove(teardown: Subscription | Unsubscribable | (() => void)): void', // ide提示 ??
  'subscription.unsubscribe(): void'
]
</script>
<template>
  <pre
    v-highlight
  ><code class="typescript">const subscription = observable(subscriber).subscribe(observer)</code></pre>
  <pre v-highlight><code class="typescript"></code></pre>
  <pre v-highlight><code class="typescript"></code></pre>
  <pre v-highlight><code class="typescript"></code></pre>
  <pre v-highlight><code class="typescript"></code></pre>
  <pre
    v-highlight
  ><code class="typescript">{{ subscriptionCode.join('\n') }}</code></pre>
</template>
<style scoped></style>
