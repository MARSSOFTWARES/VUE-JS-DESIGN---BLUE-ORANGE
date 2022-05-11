import Vue from "vue";
Vue.filter("uppercase", function (value) {
  return value.toUpperCase();
});

Vue.filter("shorten", function (value) {
  return value.substring(0, 300) + ' ...';
});
