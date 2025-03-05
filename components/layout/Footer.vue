<template>
  <footer class="footer">
    <div class="footer--inner">
      <div class="footer--content">
        <LogoContainer :is-inverted="true" />
      </div>
      <div class="footer--copyright">
        <span>&copy; {{ year }} European Products</span>
      </div>
      <div class="footer--disclaimer">
        <span>{{ $t('footer.disclaimer') }}</span>
      </div>
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

  &--inner {
    max-width: var(--max-content-width);
    margin: 0 auto;
  }

  &--content {
    display: flex;
  }

  &--copyright,
  &--disclaimer{
    text-align: center;
  }

  &--disclaimer {
    font-size: var(--font-size-small);
    margin-top: var(--spacing-small);
  }
}
</style>