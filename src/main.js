import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import './scss/main.scss';
import './scss/global/fontawesome.min.css'
import 'normalize.css';
import './filters.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
Vue.directive("bold", {

  bind : function (el) {
    el.style.fontWeight = "bold";
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

