<template>
  <div>
    <Header />
    <div class="container">
      <div class="row"></div>
    </div>
    <Profile />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Profile from "@/components/Profile.vue";
export default {
  name: "Shops",
  components: {
    Header,
    Footer,
    Profile,
  },
};
</script>

<style>
.bg {
  background-color: #f8f9fa;
}
</style>
