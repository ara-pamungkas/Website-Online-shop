import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import VueRouter from "vue-router";
import HomeSite from "./components/HomeSite.vue";
import Products from "./components/Product.vue";
import Checkout from "./components/Checkout.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDollarSign,
  faCartShopping,
  faTag,
  faTrash,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
library.add(faDollarSign, faCartShopping, faTag, faTrash, faStore);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: HomeSite,
    },
    {
      path: "/store",
      component: Products,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
