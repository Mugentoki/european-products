<template>
  <NuxtLayout>
    <Header/>
    <NuxtPage/>
    <Footer/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

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

  --max-content-width: 1200px;

  --color-eu-blue: #003399;
  --color-eu-yellow: #ffcc00;
  --color-zumthor: #eef5ff;

  --color-background: var(--color-zumthor);
  --color-border: #20263c;
  --color-border-active: var(--color-eu-blue);
  --color-font: #20263c;
  --color-font-light: var(--color-zumthor);
  --color-highlight: var(--color-eu-blue);

  --font-size-small: 1.4rem;
  --font-size-default: 1.8rem;
  --font-size-large: 2.2rem;
  --font-size-h1: 3.8rem;
  --font-size-h2: 3.4rem;
  --font-size-h3: 3rem;
  --font-size-h4: 2.6rem;
  --font-size-h5: 2.2rem;
  --font-size-h6: 1.8rem;

  --font-family-base: 'Albert Sans', sans-serif;
}

html, body {
  width: 100%;
  height: 100dvh;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  background-color: var(--color-background);
  color: var(--color-font);
  font-weight: 500;
  font-size: var(--font-size-default);
  font-family: var(--font-family-base);
}

h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}

h4 {
  font-size: var(--font-size-h4);
}

h5 {
  font-size: var(--font-size-h5);
}

h6 {
  font-size: var(--font-size-h6);
}

h1,h2,h3,h4,h5,h6,strong,a {
  color: var(--color-highlight);
}

#__nuxt {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>