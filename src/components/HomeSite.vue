<template>
  <div>
    <navbar-home></navbar-home>
    <hero-home></hero-home>
    <about-home></about-home>
    <support></support>
    <footer-home></footer-home>
  </div>
</template>

<script>
import NavbarHome from "./NavbarHome.vue";
import HeroHome from "./HeroHome.vue";
import AboutHome from "./AboutHome.vue";
import Support from "./Support.vue";
import FooterHome from "./FooterHome.vue";
export default {
  name: "home-site",
  props: ["products"],
  components: {
    NavbarHome,
    HeroHome,
    AboutHome,
    Support,
    FooterHome,
  },
};
</script>
