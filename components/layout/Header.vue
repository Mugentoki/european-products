<template>
  <header class="header">
    <div class="header--inner">
      <LogoContainer />
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoContainer from "~/components/common/LogoContainer.vue";
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;

  &--inner {
    max-width: var(--max-content-width);
    margin: 0 auto;
  }
}
</style>