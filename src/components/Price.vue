<template>
  <b>
    {{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}
  </b>
</template>

<script>
export default {
  name: "price",
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "$",
    },
    precision: {
      type: Number,
      default: 2,
    },
  },
};
</script>
