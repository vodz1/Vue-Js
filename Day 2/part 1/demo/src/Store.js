import { createStore } from "vuex";
import axios from "axios";
let store = createStore({
state(){
    return {
        products : [],
        product : {}
    }
},
mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
        state.product = product;
      },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    DELETE_PRODUCT(state, productId) {
        state.products = state.products.filter(product => product.id !== productId);
      },
  },
  actions: {
    fetchProducts({ commit }) {
      return axios.get('http://localhost:2000/recipes')
        .then(response => {
          commit('SET_PRODUCTS', response.data);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          throw error;
        });
    },
    fetchProductById({ commit }, productId) {
        return axios.get(`http://localhost:2000/recipes/${productId}`)
          .then(response => {
            commit('SET_PRODUCT', response.data);
          })
          .catch(error => {
            console.error('Error fetching product:', error);
            throw error;
          });
      },
    addProduct({ commit }, productData) {
      return axios.post('http://localhost:2000/recipes', productData)
        .then(response => {
          commit('ADD_PRODUCT', response.data);
        })
        .catch(error => {
          console.error('Error adding product:', error);
          throw error;
        });
    },
    deleteProduct({ commit }, productId) {
        return axios.delete(`http://localhost:2000/recipes/${productId}`)
          .then(() => {
            commit('DELETE_PRODUCT', productId);
          })
          .catch(error => {
            console.error('Error deleting product:', error);
            throw error;
          });
      },
  },
  getters: {
    allProducts: state => state.products,
  },

})

export default store;