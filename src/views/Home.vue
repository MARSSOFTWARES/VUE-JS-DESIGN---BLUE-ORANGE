<template>
  <div class="home">
    <HomeInit />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInit from "../components/HomeInit.vue";
export default {
  name: "Home",
  components: {
    HomeInit,
  },
};
</script>
