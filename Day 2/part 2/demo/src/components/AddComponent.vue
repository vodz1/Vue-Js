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

export default {
  name: 'AddComponent',
  data() {
    return {
      name: '',
      ingredient: '',
    };
  },
  methods: {
    handleAdd() {
      // Dispatch Vuex action to add the product
      this.$store.dispatch('addProduct', {
        name: this.name,
        ingredients: this.ingredient.split(',').map(ingredient => ingredient.trim())
      }).then(() => {
        this.$router.push('/products');
      }).catch(err => console.error(err));
    },
    addIngredients() {
      // No need for local state manipulation, handled by Vuex store
    }
  }
};
</script>

<style scoped>

</style>
