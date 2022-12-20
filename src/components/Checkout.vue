<template>
  <div class="p-5">
    <div id="navcheck" class="container-fluid">
      <h1>Checkout</h1>
    </div>
    <table class="table table-hover">
      <caption class="text-end h3">
        <b>Total :</b>
        <price :value="cartTotal"></price>
      </caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Jumlah</th>
          <th scope="col" class="text-end">Harga</th>
          <th scope="col" class="text-end">Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.cart" :key="item.product.id">
          <th class="text-center">
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn btn-primary"
                @click="$emit('add', item.product)"
              >
                +
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="$emit('delete', index)"
              >
                -
              </button>
            </div>
          </th>
          <th scope="row">
            {{ item.product.name }}
          </th>
          <th scope="row" class="text-center">
            {{ item.qty }}
          </th>
          <th scope="row" class="text-end">
            {{ item.product.price }}
          </th>
          <th scope="row" class="text-end">
            {{ Number(item.product.price * item.qty) }}
          </th>
        </tr>
      </tbody>
    </table>
    <router-link to="/store">
      <button class="btn btn-outline-success fw-bold">Back</button>
    </router-link>
  </div>
</template>

<script>
import Price from "./Price.vue";
export default {
  name: "checkout",
  props: ["cart", "cartTotal"],
  components: {
    Price,
  },
};
</script>
