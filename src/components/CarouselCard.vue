<template>
  <Carousel
    wrapAround="true"
    pauseAutoplayOnHover="true"
    :itemsToShow="4"
    snapAlign="start"
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
};
</script>

<style></style>
