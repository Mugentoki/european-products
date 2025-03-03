<template>
  <div class="main">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
* {
  &,
  &:before,
  &:after {
    box-sizing: border-box;
  }
}

:root {
  --spacing-small: 8px;
  --spacing-medium: 20px;
  --spacing-large: 36px;

  --color-background: #e7fdff;

  --font-size-small: 1.4rem;
  --font-size-default: 1.8rem;
}

html, body, #__nuxt {
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  background-color: var(--color-background);
  font-size: var(--font-size-default);
}

.main {
  width: 100%;
  min-height: 100%;
  padding: var(--spacing-medium);
}
</style>