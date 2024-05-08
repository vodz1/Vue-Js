<template>
    <div>
      <h1>Add Product</h1>
      <form @submit.prevent="handleAdd">
        <label for="name">Name</label>
        <input type="text" v-model="name">
        <label for="ingredients">Ingredients (comma-separated)</label>
        <input type="text" v-model="ingredient" @keyup.enter="addIngredients">
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddComponent',
    data() {
      return {
        name: '',
        ingredient: '',
        ingredients: []
      };
    },
    methods: {
      handleAdd() {
        // Ensure that the current ingredient is added before submitting the form
        this.addIngredients();
        
        // Send the POST request to add the product
        axios.post('http://localhost:2000/recipes', {
          name: this.name,
          ingredients: this.ingredients
        })
        .then(res => {
          console.log(res);
          this.$router.push('/products');
        })
        .catch(err => console.error(err));
      },
      addIngredients() {
        // Split the comma-separated values into individual ingredients
        const newIngredients = this.ingredient.split(',')
          .map(ingredient => ingredient.trim())
          .filter(ingredient => ingredient !== '');
  
        // Add the new ingredients to the existing list
        this.ingredients.push(...newIngredients);
  
        // Clear the input field
        this.ingredient = '';
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  