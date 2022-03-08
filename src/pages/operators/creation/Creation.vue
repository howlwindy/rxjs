<script setup lang="ts">
import AjaxVue from '@/models/operators/creation/Ajax.vue'
import BindCallbackVue from '@/models/operators/creation/BindCallback.vue'
import BindNodeCallbackVue from '@/models/operators/creation/BindNodeCallback.vue'
import DeferVue from '@/models/operators/creation/Defer.vue'
import FromVue from '@/models/operators/creation/From.vue'
import FromEventVue from '@/models/operators/creation/FromEvent.vue'
import FromEventPatternVue from '@/models/operators/creation/FromEventPattern.vue'
import GenerateVue from '@/models/operators/creation/Generate.vue'
import IntervalVue from '@/models/operators/creation/Interval.vue'
import OfVue from '@/models/operators/creation/Of.vue'
import RangeVue from '@/models/operators/creation/Range.vue'
import ThrowErrorVue from '@/models/operators/creation/ThrowError.vue'
import TimerVue from '@/models/operators/creation/Timer.vue'
import IifVue from '@/models/operators/creation/Iif.vue'
</script>
<template>
  <h3>creation</h3>
  <AjaxVue></AjaxVue>
  <BindCallbackVue></BindCallbackVue>
  <BindNodeCallbackVue></BindNodeCallbackVue>
  <DeferVue></DeferVue>
  <FromVue></FromVue>
  <FromEventVue></FromEventVue>
  <FromEventPatternVue></FromEventPatternVue>
  <GenerateVue></GenerateVue>
  <IntervalVue></IntervalVue>
  <OfVue></OfVue>
  <RangeVue></RangeVue>
  <ThrowErrorVue></ThrowErrorVue>
  <TimerVue></TimerVue>
  <IifVue></IifVue>
</template>
<style scoped></style>
