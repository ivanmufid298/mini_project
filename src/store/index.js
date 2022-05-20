import Vue from "vue";
import Vuex from "vuex";
import products from "../mock/products.json";

Vue.use(Vuex);

const state = {
  //array
  products: [],
  cart: [],
};

const getters = {
  products: (state) => state.products,
  cart: (state) => state.cart,
};

const actions = {
  getProducts({ commit }) {
    commit("getProductData"); //getProductData is an actions
  },
  addItemToCart({ commit }, item) {
    //commit item
    commit("addToCart", item);
  },
  //finding item by id
  removeItemFromCart({ commit }, id) {
    commit("removeFromCart", id);
  },
  addQty({ commit }, id) {
    commit("addQty", id);
  },
  reduceQty({ commit }, id) {
    commit("reduceQty", id);
  },
  emptyCart({ commit }) {
    commit("emptyCart");
  },
};
const mutations = {
  // Passing param state
  getProductData(state) {
    state.products = products; //import products
  },
  addToCart(state, item) {
    const productInCart = state.cart.find((product) => product.id === item.id); //same items not stacking
    if (!productInCart) {
      state.cart.push({ ...item, qty: 1 }); //add quantity = add spread
    } else {
      productInCart.qty++; //add quantity if product exist
    }
  },
  //getting item by id
  removeFromCart(state, id) {
    state.cart = state.cart.filter((item) => item.id !== id); //what is left is the id that is not deleted
  },
  //make functionality of "+"
  addQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id); //id have been parsing -> use only id
    productInCart.qty++;
  },
  //make functionality of "-"
  reduceQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id); //id have been parsing -> use only id
    // if data = 0 then reduce does not become -1,..
    if (productInCart.qty > 1) {
      productInCart.qty--;
    } else {
      state.cart.splice(state.cart.indexOf(productInCart, 1)); //if data <= 1 then delete
    }
  },
  emptyCart(state) {
    state.cart = [];
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
