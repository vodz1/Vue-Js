<template>
  <div>
    <h1>ProductDetails</h1>
    <h1>Product {{ productDetails.id }} <router-link class="btn btn-dark" to="/products">Back to Products</router-link></h1>   
    <h1>{{ productDetails.name }}</h1>
    <h1>{{ productDetails.ingredients }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, watch } from 'vue';

const route = useRoute();
const store = useStore();

const productId = route.params.id;
console.log('Product ID:', productId);

store.dispatch('fetchProductById', productId);

const productDetails = ref({});

watch(() => store.getters.productDetails, (newProductDetails) => {
  Object.assign(productDetails.value, newProductDetails);
});
</script>


