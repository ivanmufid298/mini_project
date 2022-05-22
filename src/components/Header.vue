<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1"
        ><router-link to="/">Home</router-link></span
      >
      <span class="navbar-brand mb-0 h1"
        ><router-link to="/list">List Product</router-link></span
      >
      <span class="navbar-brand mb-0 h1"
        ><router-link to="/testimonial">Review</router-link></span
      >
      <span class="navbar-brand mb-0 h1"
        ><router-link to="/cart"
          >Cart<span style="margin-left: 5px" class="badge badge-primary">{{
            totalQty
          }}</span></router-link
        ></span
      >
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex"; //get data from vuex
export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]), //get cart
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0); //sums data with qty, default 0 if the item doesnt exist
    },
  },
};
</script>

<style scoped>
/* header {
  margin-bottom: 10px;
} */
</style>
