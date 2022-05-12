<template>
  <div>
    <Header />

    <div class="container">
      <Cart /> <br />

      <button class="btn btn-info">
        <router-link style="text-decoration: none; color: white" to="/shop"
          >Back</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Cart from "@/components/Cart";
export default {
  name: "Carts",
  components: {
    Header,
    Cart,
  },
};
</script>

<style></style>
