<template>
  <div id="products" class="container">
    <div id="cards" v-for="item in showItem" :key="item.id">
      <button class="btn btn-secondary" @click.stop="$emit('add-item', item)">
        +
      </button>
      <div id="image">
        <img :src="item.image" id="image" class="img-fluid" alt="image" />
      </div>
      <div id="text">
        <h2>
          {{ item.name }}
        </h2>
        <p>
          {{ item.description }}
        </p>
        <p>
          <price :value="Number(item.price)"></price>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";
export default {
  name: "product-list",
  props: ["products", "maximal"],
  components: {
    Price,
  },
  computed: {
    showItem: function () {
      let max = this.maximal;
      return this.products.filter(function (item) {
        return item.price <= max;
      });
    },
  },
};
</script>

<style>
#products {
  margin-top: 7%;
}

#cards {
  margin-top: 2%;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
#image {
  flex-basis: 40%;
}

#text {
  flex-basis: 55%;
  padding: 10px;
}

@media screen and( max-width: 700px) {
  #cards {
    margin-top: 5%;
  }
}
</style>
