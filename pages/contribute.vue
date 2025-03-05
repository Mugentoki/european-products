<template>
  <PageContainer>
    <div>contribute page</div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "~/components/layout/PageContainer.vue";

defineI18nRoute({
  paths: {
    en: '/about-the-project',
    de: '/ueber-das-projekt',
  }
})
</script>

<style lang="scss"></style>