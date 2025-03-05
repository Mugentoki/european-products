<template>
  <footer class="footer">
    <div class="footer--content">
      <LogoContainer :is-inverted="true" />
    </div>
    <div class="footer--copyright">
      <span>&copy; {{ year }} European Products</span>
    </div>
  </footer>
</template>

<script setup lang="ts">

import LogoContainer from "~/components/common/LogoContainer.vue";

const year: number = new Date().getFullYear();
</script>

<style lang="scss">
.footer {
  width: 100%;
  background: var(--color-eu-blue);
  color: var(--color-font-light);
  padding: var(--spacing-small) var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) ;

  &--content {
    display: flex;
  }

  &--copyright {
    text-align: center;
  }
}
</style>