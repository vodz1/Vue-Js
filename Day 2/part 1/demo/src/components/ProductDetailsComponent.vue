<template>
  <div>
    <h1>ProductDetails</h1>
    <h1>Product {{ product.id }} <router-link class="btn btn-dark" to="/products">Back to Products</router-link></h1>   
    <h1>{{ product.name }}</h1>
    <h1>{{ product.ingredients }}</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "ProductDetailsComponent",
  computed: {
    ...mapState(['product']),
  },
  methods: {
    ...mapActions(['fetchProductById']),
  },
  created() {
    const productId = this.$route.params.id;
    this.fetchProductById(productId);
  },
};
</script>

<style scoped>

</style>
