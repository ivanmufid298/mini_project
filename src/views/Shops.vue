<template>
  <div>
    <Header />
    <div class="main">
      <div class="container">
        <div class="row">
          <Shop />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Shop from "@/components/Shop.vue";
// import Cart from "@/components/Cart";
export default {
  name: "Shops",
  components: {
    Shop,
    Header,
    // Cart,
  },
};
</script>

<style></style>
