<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1"
        ><router-link to="/">Home</router-link></span
      >
      <!-- <span class="navbar-brand mb-0 h1"
        ><router-link to="/shop">Shop</router-link></span
      > -->
      <!-- <span class="navbar-brand mb-0 h1">
        Cart <span class="badge badge-primary">{{ totalQty }}</span>
      </span> -->
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
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style scoped>
header {
  margin-bottom: 10vh;
}
</style>
