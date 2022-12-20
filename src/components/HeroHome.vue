<template>
  <div
    id="hero"
    class="container-fluid d-flex justify-content-around align-items-center mt-5"
  >
    <div id="image" class="col-md-4 p-3">
      <img class="img-fluid" src="../assets/Shop.png" alt="" />
    </div>
    <div id="text" class="col-md-6 p-3">
      <h1>
        Situs Belanja Online <br />
        Mudah, Cepat dan Terpercaya.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-home",
};
</script>

<style>
#hero {
  height: 75vh;
}
#text h1 {
  color: #16213e;
}

@media screen and (max-width: 767px) {
  #hero {
    height: 40vh;
    flex-direction: row-reverse;
  }
  #image {
    flex-basis: 50%;
  }
  #text {
    margin-right: 50px;
  }
  #text h1 {
    font-size: 22px;
  }
}
</style>
