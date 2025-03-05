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
  padding: var(--spacing-medium);
}
</style>