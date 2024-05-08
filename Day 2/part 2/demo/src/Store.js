// store/index.js

import { createStore } from "vuex";
import axios from "axios";
import { reactive } from "vue";

const state = reactive({
  products: [],
  product: {}
});

export default createStore({
  state,
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:2000/recipes');
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    },
    async fetchProductById({ commit }, productId) {
      try {
        const response = await axios.get(`http://localhost:2000/recipes/${productId}`);
        commit('SET_PRODUCT', response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
      }
    },
    async deleteProduct({ commit }, productId) {
      try {
        await axios.delete(`http://localhost:2000/recipes/${productId}`);
        commit('DELETE_PRODUCT', productId);
      } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
      }
    },
  },
  getters: {
    allProducts: state => state.products,
    getProductById: state => id => state.products.find(product => product.id === id),
    productDetails: state => state.product,
  },
});
