<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <!-- <Footer /> -->
    </footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
// import Footer from "./Footer.vue";
export default {
  name: "LayoutCom",
  components: {
    Header,
    // Footer,
  },
};
</script>

<style></style>
