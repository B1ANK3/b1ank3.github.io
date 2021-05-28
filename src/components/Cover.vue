<template>
  <div
    class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
  >
    <Head />
    <Body />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Head from "./Cover/CoverHead.vue";
import Body from "./Cover/CoverBody.vue";
import Footer from "./Cover/Coverfooter.vue";

export default defineComponent({
  components: {
    Head,
    Body,
    Footer,
  },
});
</script>

<style lang="scss" >
body {
  height: 100vh;
  width: 100vw;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>