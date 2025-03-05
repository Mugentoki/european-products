<template>
  <header>
    <NuxtLinkLocale class="logo-container" to="/">
      <NuxtImg src="/images/logo.png" width="64" height="64"/>
      <strong class="logo-text">European<br>Products</strong>
    </NuxtLinkLocale>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-medium);
  text-decoration: none;

  .logo-text {
    font-size: var(--font-size-h3);
    line-height: 1;
    padding-left: var(--spacing-small);
  }
}
</style>