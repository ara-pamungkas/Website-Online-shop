<template>
  <div id="support" class="container">
    <div>
      <h1 class="text-center fw-bold">SUPPORT</h1>
    </div>
    <div id="image" class="d-flex align-items-center">
      <div class="col-md-3">
        <img src="../assets/Bukalapakk.png" class="img-fluid" alt="" />
      </div>
      <div class="col-md-3">
        <img src="../assets/Kemendag.png" class="img-fluid" alt="" />
      </div>
      <div class="col-md-3">
        <img src="../assets/Shopee.png" class="img-fluid" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "support",
};
</script>

<style>
h1 {
  color: #16213e;
}
#support {
  margin-top: 9%;
  margin-bottom: 2%;
}
#image {
  margin-top: 5%;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  .col-md-3 {
    width: 130px;
  }
}
</style>
