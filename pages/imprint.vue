<template>
  <PageContainer>
    <div>imprint page</div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "~/components/layout/PageContainer.vue";

defineI18nRoute({
  paths: {
    en: '/imprint',
    de: '/impressum',
  }
})
</script>

<style lang="scss"></style>