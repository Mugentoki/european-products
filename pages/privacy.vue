<template>
  <PageContainer>
    <div>privacy page</div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "~/components/layout/PageContainer.vue";

defineI18nRoute({
  paths: {
    en: '/privacy-policy',
    de: '/datenschutzerklaerung',
  }
})
</script>

<style lang="scss"></style>