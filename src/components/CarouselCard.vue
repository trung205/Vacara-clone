<template ref="myCarousel">
  <Carousel
    wrapAround="true"
    pauseAutoplayOnHover="true"
    :itemsToShow="item"
    snapAlign="start"
    :touchDrag="true"
  >
    <Slide v-for="(item, index) in products" :key="index">
      <CardProduct :product="item"></CardProduct>
    </Slide>
    <slot></slot>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import CardProduct from "./CardProduct.vue";

export default {
  name: "CarouselCard",
  props: {
    products: Array,
  },

  components: {
    Carousel,
    Slide,
    Navigation,
    CardProduct,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
      item: 4,
    };
  },

  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },

  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log(newWidth, oldWidth);
      if (newWidth < 990 && newWidth > 650) {
        this.item = 3;
      }
      if (newWidth < 650) {
        this.item = 2;
      }
      if (newWidth > 990) {
        this.item = 4;
      }
    },
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/components/carousel-slider.scss";
</style>
