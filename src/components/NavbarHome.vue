<template>
  <nav class="navbar navbar-expand-lg bg-white p-3 position-sticky top-0">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">BukaNLapak</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div id="navbar-nav" class="navbar-nav d-flex gap-3 mx-auto">
          <a class="nav-link fw-bold" href="#">HOME</a>
          <a class="nav-link fw-bold" href="#about">ABOUT US</a>
          <a class="nav-link fw-bold" href="#support">SUPPORT</a>
        </div>
        <router-link
          style="text-decoration: none"
          to="/store"
          id="navbar-nav-2"
          class="navbar-nav"
        >
          <a class="nav-link fw-bold"
            >STORE <font-awesome-icon icon="fa-solid fa-store"
          /></a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-home",
};
</script>

<style>
nav {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
#navbar-nav .nav-link {
  color: #16213e;
}
#navbar-nav .nav-link:hover {
  color: #16213ec7;
}
#navbar-nav-2 .nav-link {
  color: #16213e;
}
#navbar-nav-2 .nav-link:hover {
  color: #16213ec7;
}

@media screen and (max-width: 991px) {
  #navbar-nav-2 {
    margin-top: 20px;
  }
}
</style>
