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
    <tr v-for="p in prds" :key="p.id">
<td>{{ p.id }}</td>
<td>{{ p.name }}</td>
<td>{{ p.ingredients }}</td>
<td><button class="btn btn-dark" @click="DeleteProduct(p.id)">Delete</button></td>
<td><router-link class="btn btn-dark" :to="`/products/${p.id}`">More...</router-link></td>

    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name : 'ProductsComponent',
        data() {
            return {
                prds : []
            }
        },
        methods: {
            GetAllProducts(){
                axios.get('http://localhost:2000/recipes')
                .then(res=>{
                    this.prds = res.data;
                })
                .catch(err=>console.log(err))
            },
            DeleteProduct(id){
                axios.delete(`http://localhost:2000/recipes/${id}`)
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
                this.GetAllProducts()
            }
        },
        mounted() {
            this.GetAllProducts()
        },
    }

</script>

<style scoped>

</style>