<template>
  <div>
    <NuxtLoadingIndicator  :throttle="0" :height="2" class="bg-orange" />
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
</style>