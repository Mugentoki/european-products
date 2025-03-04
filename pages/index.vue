<template>
    <PageContainer>
      <h1>{{ $t('pages.index.headline') }}</h1>
      <input
          v-model="search"
          placeholder="Search for a product..."
          class="p-2 border rounded"
          @input="fetchProducts"
      >
      <div v-if="loading" class="mt-4">Loading...</div>

      <ul v-else class="mt-4">
        <li v-for="product in products" :key="product.id" class="mb-2 p-2 border rounded">
          <h3 class="font-bold">{{ product.name }}</h3>
          <p>Origin: {{ product.origin }}</p>
          <p v-if="product.website">
            <a :href="product.website" target="_blank" class="text-blue-500">Website</a>
          </p>
        </li>
      </ul>
    </PageContainer>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";

  import type { Ref } from "vue";
  import type { Product } from "~/types";
  import PageContainer from "~/components/common/PageContainer.vue";
  
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
  