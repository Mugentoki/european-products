<template>
  <div class="page-container" :class="extraClasses">
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps<{ extraClasses?: string }>();
</script>

<style lang="scss">
.page-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: var(--spacing-medium);
  flex-grow: 1;
}
</style>