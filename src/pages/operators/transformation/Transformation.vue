<script setup lang="ts">
import BufferVue from '@/models/operators/transformation/Buffer.vue'
import BufferCountVue from '@/models/operators/transformation/BufferCount.vue'
import BufferTimeVue from '@/models/operators/transformation/BufferTime.vue'
import BufferToggleVue from '@/models/operators/transformation/BufferToggle.vue'
import BufferWhenVue from '@/models/operators/transformation/BufferWhen.vue'
import ConcatMapVue from '@/models/operators/transformation/ConcatMap.vue'
import ConcatMapToVue from '@/models/operators/transformation/ConcatMapTo.vue'
import ExhaustMapVue from '@/models/operators/transformation/ExhaustMap.vue'
import ExpandVue from '@/models/operators/transformation/Expand.vue'
import GroupByVue from '@/models/operators/transformation/GroupBy.vue'
import MapVue from '@/models/operators/transformation/Map.vue'
import MapToVue from '@/models/operators/transformation/MapTo.vue'
import MergeMapVue from '@/models/operators/transformation/MergeMap.vue'
import MergeMapToVue from '@/models/operators/transformation/MergeMapTo.vue'
import MergeScanVue from '@/models/operators/transformation/MergeScan.vue'
import PairwiseVue from '@/models/operators/transformation/Pairwise.vue'
import ScanVue from '@/models/operators/transformation/Scan.vue'
import SwitchMapVue from '@/models/operators/transformation/SwitchMap.vue'
import SwitchMapToVue from '@/models/operators/transformation/SwitchMapTo.vue'
import SwitchScanVue from '@/models/operators/transformation/SwitchScan.vue'
import WindowVue from '@/models/operators/transformation/Window.vue'
import WindowCountVue from '@/models/operators/transformation/WindowCount.vue'
import WindowTimeVue from '@/models/operators/transformation/WindowTime.vue'
import WindowToggleVue from '@/models/operators/transformation/WindowToggle.vue'
import WindowWhenVue from '@/models/operators/transformation/WindowWhen.vue'
</script>
<template>
  <h3>transformation</h3>
  <BufferVue></BufferVue>
  <BufferCountVue></BufferCountVue>
  <BufferTimeVue></BufferTimeVue>
  <BufferToggleVue></BufferToggleVue>
  <BufferWhenVue></BufferWhenVue>
  <ConcatMapVue></ConcatMapVue>
  <ConcatMapToVue></ConcatMapToVue>
  <ExhaustMapVue></ExhaustMapVue>
  <ExpandVue></ExpandVue>
  <ExhaustMapVue></ExhaustMapVue>
  <ExpandVue></ExpandVue>
  <GroupByVue></GroupByVue>
  <MapVue></MapVue>
  <MapToVue></MapToVue>
  <MergeMapVue></MergeMapVue>
  <MergeMapToVue></MergeMapToVue>
  <MergeScanVue></MergeScanVue>
  <PairwiseVue></PairwiseVue>
  <ScanVue></ScanVue>
  <SwitchScanVue></SwitchScanVue>
  <SwitchMapVue></SwitchMapVue>
  <SwitchMapToVue></SwitchMapToVue>
  <WindowVue></WindowVue>
  <WindowCountVue></WindowCountVue>
  <WindowTimeVue></WindowTimeVue>
  <WindowToggleVue></WindowToggleVue>
  <WindowWhenVue></WindowWhenVue>
</template>
<style scoped></style>
