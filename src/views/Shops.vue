<template>
  <div>
    <Header />
    <div class="main">
      <div class="container mt-5 mb-5">
        <div class="row">
          <Shop />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Shop from "@/components/Shop.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Shops",
  components: {
    Shop,
    Header,
    Footer,
  },
};
</script>

<style>
.bg {
  background-color: #f8f9fa;
}
</style>
