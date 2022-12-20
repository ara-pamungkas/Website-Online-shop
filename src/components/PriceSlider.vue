<template>
  <transition
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
  >
    <div v-if="sliderStatus">
      <div class="container-fluid d-flex align-items-center gap-3">
        <label id="label" class="fw-bold">Harga Maximal</label>
        <input
          type="number"
          class="form-control w-25"
          v-model="maxAmount"
          @change="$emit('update:maximal', maxAmount)"
        />
        <input
          type="range"
          class="form-range"
          v-model="maxAmount"
          @input="$emit('update:maximal', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  props: ["maximal", "sliderStatus"],
  data() {
    return {
      maxAmount: 50,
    };
  },
  computed: {
    sliderState: function () {
      this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>

<style>
#label {
  width: 15vw;
}
</style>
