<template>
  <PageContainer>
    <div>FAQ page</div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "~/components/layout/PageContainer.vue";

defineI18nRoute({
  paths: {
    en: '/how-to-contribute',
    de: '/wie-kann-ich-beitragen',
  }
})
</script>

<style lang="scss"></style>