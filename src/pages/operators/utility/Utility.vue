<script setup lang="ts">
import TapVue from '@/models/operators/utility/Tap.vue'
import DelayVue from '@/models/operators/utility/Delay.vue'
import DelayWhenVue from '@/models/operators/utility/DelayWhen.vue'
import DematerializeVue from '@/models/operators/utility/Dematerialize.vue'
import MaterializeVue from '@/models/operators/utility/Materialize.vue'
import ObserveOnVue from '@/models/operators/utility/ObserveOn.vue'
import SubscribeOnVue from '@/models/operators/utility/SubscribeOn.vue'
import TimeIntervalVue from '@/models/operators/utility/TimeInterval.vue'
import TimestampVue from '@/models/operators/utility/Timestamp.vue'
import TimeoutVue from '@/models/operators/utility/Timeout.vue'
import ToArrayVue from '@/models/operators/utility/ToArray.vue'
</script>
<template>
  <h3>utility</h3>
  <TapVue></TapVue>
  <DelayVue></DelayVue>
  <DelayWhenVue></DelayWhenVue>
  <DematerializeVue></DematerializeVue>
  <MaterializeVue></MaterializeVue>
  <ObserveOnVue></ObserveOnVue>
  <SubscribeOnVue></SubscribeOnVue>
  <TimeIntervalVue></TimeIntervalVue>
  <TimestampVue></TimestampVue>
  <TimeoutVue></TimeoutVue>
  <ToArrayVue></ToArrayVue>
</template>
<style scoped></style>
