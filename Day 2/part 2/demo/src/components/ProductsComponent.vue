<!-- ProductsComponent.vue -->
<template>
  <div>
    <h1>Products <router-link class="btn btn-dark w-40" to="/products/add">Add Product</router-link></h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Ingredients</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.ingredients }}</td>
          <td><button class="btn btn-dark" @click="deleteProduct(product.id)">Delete</button></td>
          <td><router-link class="btn btn-dark" :to="`/products/${product.id}`">More...</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const store = useStore();
const products = ref([]);

const deleteProduct = async (id) => {
  await store.dispatch('deleteProduct', id);
};

onMounted(async () => {
  await store.dispatch('fetchProducts');
  products.value = store.getters.allProducts;
});
</script>
