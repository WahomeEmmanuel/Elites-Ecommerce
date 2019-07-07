import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Cart: [],
  },
  getters: {
    Cart: state => state.Cart,
  },
  mutations: {
    ADD_TO_CART(state, product) { state.Cart.push(product); },
  },
  actions: {
    addToCart(context, product) { context.commit('ADD_TO_CART', product); },
  },
});