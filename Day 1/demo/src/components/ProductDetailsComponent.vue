<template>
    <div>
<h1>ProductDetails</h1>
<h1>Product {{ id }} <router-link class="btn btn-dark" to="/products">Back to Products</router-link></h1>   
<h1>{{ prd.name }}</h1>
<h1>{{ prd.ingredients }}</h1>
</div>
</template>

<script>
import Mixin from '../../public/mixins/Mixin.js'

export default {
  name: "ProductDetailsComponent",
  mixins: [Mixin], // Use the mixin
  data() {
    return {
      id: '',
      prd: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.GetprdById(this.id) // Call the method from the mixin
      .then(prd => {
        if (prd) {
          this.prd = prd;
        } 
      });
  }
};
</script>


<style scoped>

</style>