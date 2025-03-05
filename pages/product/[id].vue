<template>
  <PageContainer>
    <div>{{  id }}</div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "~/components/layout/PageContainer.vue";

const route = useRoute()
const id = ref(route.params.id)
</script>

<style lang="scss"></style>