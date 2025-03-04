<template>
  <div class="page-container" :class="extraClasses">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ extraClasses?: string }>();
</script>

<style lang="scss">
.page-container {
  width: 100%;
}
</style>