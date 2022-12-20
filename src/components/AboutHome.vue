<template>
  <div id="about" class="p-3 container-fluid">
    <div class="container d-flex flex-wrap align-items-center">
      <div class="col-md-7">
        <h1 class="fw-bold">
          WHO <span>WE</span> <br />
          ARE <span>!</span>
        </h1>
        <p>
          <b>BukaNLapak</b> dalah salah satu marketplace asal indonesia yang
          berdiri pada tahun 2022. Didalam marketplace ini Kami menyediakan
          berbagai macam produk berkualitas untuk semua orang. Kami juga membuat
          tampilan dan fitur yang sederhana untuk mempermudah user dalam
          menggunakannya.
        </p>
      </div>
      <div class="col-md-5">
        <img
          id="imageHome"
          src="../assets/image-2.jpg"
          class="img-fluid"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-home",
};
</script>

<style>
#about {
  margin-top: 9%;
}

h1 {
  color: #16213e;
}
p {
  font-size: 20px;
  color: #16213e;
}
span {
  color: #ff7000;
}
</style>
