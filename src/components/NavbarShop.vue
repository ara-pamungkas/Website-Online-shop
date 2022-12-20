<template>
  <div
    id="navbar"
    class="container-fluid bg-white-50 d-flex justify-content-between p-3"
  >
    <div class="d-flex gap-3">
      <button class="btn btn-outline-success" @click="$emit('toggle-slider')">
        <font-awesome-icon icon="fa-solid fa-dollar-sign" />
      </button>
      <router-link to="/">
        <button class="btn btn-outline-success fw-bold">Website</button>
      </router-link>
    </div>
    <div class="d-flex gap-3">
      <router-link to="/checkout">
        <button class="btn btn-outline-success fw-bold">
          Checkout
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </button>
      </router-link>
      <div class="dropdown">
        <button
          class="btn btn-outline-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> {{ cartQty }} </b>
          <font-awesome-icon icon="fa-solid fa-tag" class="me-2 ms-1" />
          <price :value="Number(cartTotal)"></price>
        </button>
        <div class="dropdown-menu">
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item d-flex align-items-center gap-2" href="#">
              <b>
                {{ item.qty }}
              </b>
              {{ item.product.name }}
              <price :value="Number(item.product.price)"> </price>
              <button class="btn" @click.stop="$emit('delete-item', index)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";
export default {
  name: "navbar-shop",
  props: ["cart", "cartTotal", "cartQty"],
  components: {
    Price,
  },
};
</script>
