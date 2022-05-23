<template>
  <div class="cart">
    <!-- alert visible: true, if there's no product exist in cart (!cart.length) -->
    <div v-if="!cart.length" class="alert alert-secondary" role="alert">
      No Product in cart!
    </div>

    <!-- alert visible: true, if orderPlaced: true -->
    <div
      v-if="orderPlaced"
      @click="() => (this.orderPlaced = false)"
      class="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      Order successfully placed!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- Looping cart item using v-for -->
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cart" :key="item.id">
        <button
          @click="removeItemFromCart(item.id)"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <!-- Cart Media -->
        <div class="media">
          <!-- Binding varible not string -->
          <img width="80px" :src="item.imgUrl" class="mr-3" alt="item.title" />
          <div class="media-body">
            <p class="mt-0">{{ item.title }}</p>
            <button
              class="qty-button btn btn-sm btn-secondary"
              @click="reduceQty(item.id)"
            >
              -
            </button>
            x {{ item.qty }}
            <button
              class="qty-button btn btn-sm btn-secondary"
              @click="addQty(item.id)"
            >
              +
            </button>
          </div>
        </div>
      </li>
    </ul>
    <!-- use cart.length -> item exist = checkout visible: true -->
    <button class="btn btn-lg btn-block btn-success mt-5">
      <router-link to="/invoice" style="color: white; text-decoration: none"
        >Pay</router-link
      >
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; //get products from vuex in cart
export default {
  name: "Cart",
  data() {
    return {
      isProcessing: false,
      orderPlaced: false,
    };
  },
  computed: {
    ...mapGetters(["cart"]), //get data cart
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0); //sums data with qty * price, default 0 if data doesnt exist
    },
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]), //registration
    placeOrder() {
      this.isProcessing = true;

      //for making looks like fetching data
      setTimeout(() => {
        this.isProcessing = false;
        this.orderPlaced = true;
        this.emptyCart();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.media {
  width: 90%;
  text-align: left;
}
.qty-button {
  border-radius: 50%;
  width: 30px;
}
.checkout-button {
  margin-top: 20px;
}
</style>
