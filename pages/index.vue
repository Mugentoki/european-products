<template>
  <PageContainer>
    <div class="headline-block">
      <h1>{{ $t('pages.index.headline.one') }}<br>{{ $t('pages.index.headline.two') }}</h1>
      <p>{{ $t('pages.index.textblock') }}</p>
    </div>
    <div class="search-wrapper">
      <input
          v-model="search"
          type="text"
          class="product-search"
          :placeholder="$t('pages.index.search.label')"
          :aria-label="$t('pages.index.search.label')"
          @input="fetchProducts"
      >
      <div v-if="loading" class="spinner" />
    </div>
    <div class="search-results">
      <ul class="search-results--list">
        <li v-for="product in products" :key="product.id" class="search-results--item">
          <strong class="search-results--item-name">{{ product.name }}</strong>
          <div class="search-results--item-labels"><span class="origin" :class="product.origin">{{ product.origin }}</span></div>
          <p class="search-results--item-description">{{ product.description }}</p>
          <NuxtLink :to="'/product/' + product.id">{{ $t('pages.index.productlink') }}</NuxtLink>
        </li>
      </ul>
    </div>
  </PageContainer>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

import type { Ref } from "vue";
import type { Product } from "~/types";
import PageContainer from "~/components/layout/PageContainer.vue";

const search: Ref<string> = ref("");
const products: Ref<Product[]> = ref([]);
const loading: Ref<boolean> = ref(false);

let abortController: AbortController;
let fetchTimer: ReturnType<typeof setTimeout>;

async function fetchProducts() {
  clearTimeout(fetchTimer);

  if (abortController) {
    abortController.abort();
  }

  fetchTimer = setTimeout(async () => {
    abortController = new AbortController();
    const signal: AbortSignal = abortController.signal;

    loading.value = true;

    try {
      const res: Response = await fetch(`/api/products?q=${search.value}`, { signal });
      const data = await res.json();
      products.value = data.products;
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }
    }

    loading.value = false;
  }, 500);
}
</script>

<style lang="scss">
.headline-block {
  max-width: 800px;
  margin: 120px auto 0;
  text-align: center;
}

.search-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 40px;

  input {
    width: 300px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid var(--color-border);
    font-size: var(--font-size-large);
    padding: var(--spacing-small);
    box-shadow: 0 0 0 0 transparent;
    transition: all .3s ease-in-out;

    &:hover,
    &:focus,
    &:active {
      border-color: var(--color-border-active);
      box-shadow: 0 0 8px 0 var(--color-border-active);
      outline: none;
    }
  }
}

.search-results {
  width: 100%;
  margin-top: var(--spacing-large);

  &--list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-medium);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &--item {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: var(--spacing-medium);
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 0 8px 0 var(--color-border);
    transition: all .3s ease-in-out;

    &:hover {
      box-shadow: 0 0 16px 0 var(--color-border-active);
    }

    &-name {
      font-size: var(--font-size-large);
    }

    &-description {
      flex-grow: 1;
    }
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  animation: spin 1s linear infinite;
}

.spinner::before,
.spinner::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #007bff; /* Primary color */
  animation: spin 1s linear infinite;
}

.spinner::after {
  border: 4px solid transparent;
  border-bottom-color: #007bff; /* Secondary rotating effect */
  animation-duration: 1.5s; /* Slightly different timing */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>