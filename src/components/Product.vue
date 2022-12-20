<template>
  <div>
    <navbar-shop
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slider="togglePriceSlider"
      @delete-item="deleteItem"
    ></navbar-shop>
    <price-slider
      :maximal.sync="maximal"
      :sliderStatus="sliderStatus"
    ></price-slider>

    <product-shop
      :products="products"
      :maximal="maximal"
      @add-item="addItem"
    ></product-shop>
  </div>
</template>

<script>
import NavbarShop from "./NavbarShop.vue";
import PriceSlider from "./PriceSlider.vue";
import ProductShop from "./ProductShop.vue";

export default {
  name: "product",
  props: [
    "cart",
    "cartTotal",
    "cartQty",
    "products",
    "maximal",
    "sliderStatus",
  ],
  components: {
    NavbarShop,
    ProductShop,
    PriceSlider,
  },
  methods: {
    togglePriceSlider: function () {
      this.$emit("toggle");
    },
    addItem: function (item) {
      this.$emit("add", item);
    },
    deleteItem: function (index) {
      this.$emit("delete", index);
    },
  },
};
</script>
