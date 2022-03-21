<script setup lang="ts">
import { Subject } from 'rxjs'
import {
  // buffer,
  // count,
  // max,
  // take,
  // first,
  // last,
  // map,
  // mapTo,
  // filter,
  // skip,
  // single,
  find
} from 'rxjs/operators'
import { ref, watch } from 'vue'
const value = ref<string>('')
const result = ref<any>(value.value)
const subject = new Subject<string>()
subject.pipe(find((v) => v.includes('a'))).subscribe({
  next: (v) => {
    console.log(v)
    result.value = v
  }
})
watch(value, (v) => {
  subject.next(v)
})
</script>
<template>
  <h4><code>custom</code></h4>
  <input v-model="value" type="text" />
  <p>{{ result }}</p>
</template>
<style scoped></style>
