<script setup lang="ts">
interface IProps {
  data: string[]
}
const props = withDefaults(defineProps<IProps>(), { data: () => [] })
</script>
<template>
  <pre v-highlight>
    <code class="typescript">{{props.data.join('\n')}}</code>
  </pre>
</template>
<style scoped></style>
