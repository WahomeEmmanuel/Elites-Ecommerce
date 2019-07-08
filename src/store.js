import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Persist vuex local storage
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  state: {
    Cart: [],
  },
  getters: {
    Cart: state => state.Cart,
  },
  mutations: {
    ADD_TO_CART(state, product) { state.Cart.push(product); },
    REMOVE_FROM_CART(state, index) { state.Cart.splice(index, 1); },
  },
  actions: {
    addToCart(context, product) { context.commit('ADD_TO_CART', product); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
  plugins: [vuexLocalStorage.plugin]
});