<template>
  <div class="row">
    <!-- Looping item in product.json with id as unique key -->
    <div
      class="card border-0 shadow my-5"
      style="width: 15rem"
      v-for="item in products"
      :key="item.id"
    >
      <!-- Binding variable -->
      <img :src="item.imgUrl" class="card-img-top" :alt="item.title" />
      <div class="card-body">
        <p class="card-title">{{ item.title }}</p>
        <p class="card-text">$ {{ item.price.toLocaleString() }}</p>
        <button class="btn btn-primary" @click="addItemToCart(item)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="card border-0 shadow my-5" style="height: auto; width: auto">

  </div> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Shop",
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
  },
};
</script>

<style scoped>
.card {
  height: auto;
  padding: 10px;
  border: none;
  margin-bottom: 50px;
  margin-right: 100px;
}
</style>
