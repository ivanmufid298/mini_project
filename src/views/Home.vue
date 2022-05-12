<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <Banner />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  components: {
    Header,
    Banner,
  },
};
</script>

<style></style>
