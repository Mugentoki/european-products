<template>
    <div class="p-4">
      <input
        v-model="search"
        placeholder="Search for a product..."
        class="p-2 border rounded"
      />
      <button @click="fetchProducts" class="p-2 bg-blue-500 text-white rounded ml-2">Search</button>
  
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
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const search = ref("");
  const products = ref([]);
  const loading = ref(false);
  
  async function fetchProducts() {
    loading.value = true;
    const res = await fetch(`/api/products?q=${search.value}`);
    const data = await res.json();
    products.value = data.products;
    loading.value = false;
  }
  </script>
  