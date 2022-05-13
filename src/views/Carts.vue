<template>
  <div>
    <Header />

    <div class="container mt-5">
      <Cart /> <br />

      <button class="btn btn-info">
        <router-link style="text-decoration: none; color: white" to="/shop"
          >Back</router-link
        >
      </button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer.vue";
export default {
  name: "Carts",
  components: {
    Header,
    Cart,
    Footer,
  },
};
</script>

<style></style>
