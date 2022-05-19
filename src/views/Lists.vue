<template>
  <div>
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import List from "@/components/List.vue";
export default {
  name: "Home",
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
#home {
  background-color: black;
}
</style>
