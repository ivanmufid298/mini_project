<template>
  <div>
    <Header />
    <div class="container" style="max-width: 1200px">
      <Invoice />
    </div>
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
