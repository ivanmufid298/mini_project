<template>
  <div>
    <Header />
    <br />
    <br />
    <br /><br />
    <br />
    <div class="container">
      <div class="row">
        <Banner />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Footer,
  },
};
</script>

<style>
#home {
  background-color: black;
}
</style>
