<script setup lang="ts">
import MulticastVue from '@/models/operators/multicasting/Multicast.vue'
import PublishVue from '@/models/operators/multicasting/Publish.vue'
import PublishBehaviorVue from '@/models/operators/multicasting/PublishBehavior.vue'
import PublishLastVue from '@/models/operators/multicasting/PublishLast.vue'
import PublishReplayVue from '@/models/operators/multicasting/PublishReplay.vue'
import ShareVue from '@/models/operators/multicasting/Share.vue'
</script>
<template>
  <MulticastVue></MulticastVue>
  <PublishVue></PublishVue>
  <PublishBehaviorVue></PublishBehaviorVue>
  <PublishLastVue></PublishLastVue>
  <PublishReplayVue></PublishReplayVue>
  <ShareVue></ShareVue>
</template>
<style scoped></style>
