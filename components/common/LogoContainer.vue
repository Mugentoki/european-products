<template>
  <NuxtLinkLocale class="logo-container" :class="{inverted: isInverted}" to="/">
    <!-- move to own component -->
    <NuxtImg src="/images/logo.png" width="64" height="64"/>
    <strong class="logo-text">European<br>Products</strong>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
const { isInverted = false } = defineProps<{
  isInverted?: boolean;
}>();
</script>

<style lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-medium);
  text-decoration: none;
  width: fit-content;

  &.inverted {
    img {
      border: 1px solid var(--color-font-light);
    }

    .logo-text {
      color: var(--color-font-light);
    }
  }

  .logo-text {
    font-size: var(--font-size-h3);
    line-height: 1;
    padding-left: var(--spacing-small);
  }
}
</style>