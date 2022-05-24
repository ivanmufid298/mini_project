<template>
  <div>
    <!-- alert visible: true, if orderPlaced: true -->
    <div class="container mt-5">
      <div
        v-if="orderPlaced"
        @click="() => (this.orderPlaced = false)"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        Payment Successfull!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <button class="btn btn-info">
          <router-link
            v-if="orderPlaced"
            style="text-decoration: none; color: white"
            to="/shop"
            >Back</router-link
          >
        </button>
      </div>
    </div>
    <div class="row gutters mt-5" v-if="cart.length">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card">
          <div class="card-body p-0">
            <div class="invoice-container">
              <div class="invoice-header">
                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"></div>
                </div>
                <!-- Row end -->
                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a href="index.html" class="invoice-logo">
                      electriccity.com
                    </a>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <address class="text-right">
                      Electric City Inc, 45 Belimbing Street.<br />
                      Pancoran, Depok.<br />
                      12345 67890
                    </address>
                  </div>
                </div>
                <!-- Row end -->
                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div class="invoice-details">
                      <address>
                        Ivan Mini Project<br />
                        16431 Belimbing Street, Depok, INA
                      </address>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="invoice-details">
                      <div class="invoice-num">
                        <div>Invoice - #001</div>
                        <div>May 24th 2022</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Row end -->
              </div>
              <div class="invoice-body">
                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="table-responsive">
                      <table class="table custom-table m-0">
                        <thead>
                          <tr>
                            <th>Items</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>Sub Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in cart" :key="item.id">
                            <td>
                              {{ item.title }}
                            </td>
                            <td>#{{ item.id }}</td>
                            <td>{{ item.qty }}</td>
                            <td>${{ item.qty * item.price }}</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td colspan="2">
                              <p>
                                Subtotal<br />
                                Tax ( 10% )<br />
                              </p>
                              <h5 class="text-success">
                                <strong>Grand Total</strong>
                              </h5>
                            </td>
                            <td>
                              <p>
                                ${{ totalPrice.toLocaleString() }}<br />
                                ${{ totalTax.toLocaleString() }}<br />
                              </p>
                              <h5 class="text-success">
                                <strong
                                  >${{ totalAll.toLocaleString() }}</strong
                                >
                              </h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Row end -->
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="invoice-details">
                    <address>
                      Bank BII: 18790367490<br />
                      On Behalf of: Ivan
                    </address>
                    <div class="text-center">
                      <h5>Scan This on Paypal</h5>
                      <img
                        style="width: 10%"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/296px-QR_code_for_mobile_English_Wikipedia.svg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="invoice-footer mb-5">
                Thank you for your Business.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mb-5">
        <button
          v-if="cart.length"
          @click="placeOrder"
          class="checkout-button btn btn-lg btn-block btn-success"
          :disabled="isProcessing"
        >
          <!-- spinner if data checking out -->
          <div v-if="isProcessing" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>Checkout ($ {{ totalAll.toLocaleString() }})</span>
        </button>
      </div>
    </div>
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
    totalTax() {
      return this.totalPrice * 0.1;
    },
    totalAll() {
      return this.totalPrice + this.totalTax;
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
body {
  margin-top: 20px;
  color: #2e323c;
  background: #f5f6fa;
  position: relative;
  height: 100%;
}
.invoice-container {
  padding: 1rem;
}
.invoice-container .invoice-header .invoice-logo {
  margin: 0.8rem 0 0 0;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 700;
  color: #2e323c;
}
.invoice-container .invoice-header .invoice-logo img {
  max-width: 130px;
}
.invoice-container .invoice-header address {
  font-size: 0.8rem;
  color: #9fa8b9;
  margin: 0;
}
.invoice-container .invoice-details {
  margin: 1rem 0 0 0;
  padding: 1rem;
  line-height: 180%;
  background: #f5f6fa;
}
.invoice-container .invoice-details .invoice-num {
  text-align: right;
  font-size: 0.8rem;
}
.invoice-container .invoice-body {
  padding: 1rem 0 0 0;
}
.invoice-container .invoice-footer {
  text-align: center;
  font-size: 0.7rem;
  margin: 5px 0 0 0;
}

.invoice-status {
  text-align: center;
  padding: 1rem;
  background: #ffffff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.invoice-status h2.status {
  margin: 0 0 0.8rem 0;
}
.invoice-status h5.status-title {
  margin: 0 0 0.8rem 0;
  color: #9fa8b9;
}
.invoice-status p.status-type {
  margin: 0.5rem 0 0 0;
  padding: 0;
  line-height: 150%;
}
.invoice-status i {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  display: inline-block;
  padding: 1rem;
  background: #f5f6fa;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
}
.invoice-status .badge {
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .invoice-container {
    padding: 1rem;
  }
}

.custom-table {
  border: 1px solid #e0e3ec;
}
.custom-table thead {
  background: #007ae1;
}
.custom-table thead th {
  border: 0;
  color: #ffffff;
}
.custom-table > tbody tr:hover {
  background: #fafafa;
}
.custom-table > tbody tr:nth-of-type(even) {
  background-color: #ffffff;
}
.custom-table > tbody td {
  border: 1px solid #e6e9f0;
}

.card {
  background: #ffffff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
  margin-bottom: 1rem;
}

.text-success {
  color: #00bb42 !important;
}

.text-muted {
  color: #9fa8b9 !important;
}

.custom-actions-btns {
  margin: auto;
  display: flex;
  justify-content: flex-end;
}

.custom-actions-btns .btn {
  margin: 0.3rem 0 0.3rem 0.3rem;
}
</style>
