<template>
  <div>
    <Header />
    <Invoice />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Invoice from "@/components/Invoice";
import Footer from "@/components/Footer.vue";
export default {
  name: "Carts",
  components: {
    Header,
    Invoice,
    Footer,
  },
};
</script>

<style></style>
