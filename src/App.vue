<template>
  <div id="app">
    <router-view
      :cart="cart"
      :cartTotal="cartTotal"
      :cartQty="cartQty"
      :products.sync="products"
      :maximal="maximal"
      :sliderStatus="sliderStatus"
      @add="addItem"
      @delete="deleteItem"
      @toggle="toggleSliderStatus"
    >
    </router-view>
  </div>
</template>

<script>
import HomeSite from "./components/HomeSite.vue";
import Product from "./components/Product.vue";
import Checkout from "./components/Checkout.vue";

export default {
  name: "App",
  components: {
    Product,
    HomeSite,
    Checkout,
  },
  data() {
    return {
      products: [],
      sliderStatus: true,
      cart: [],
      maximal: 50,
    };
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },
    addItem: function (product) {
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        if (item.product.price == Number(product.price)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },
};
</script>
