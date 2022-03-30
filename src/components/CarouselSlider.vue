<template>
  <Carousel wrapAround="true" :autoplay="2000" pauseAutoplayOnHover="true">
    <Slide v-for="(img, index) in listImg" :key="index">
      <img :src="img.url" alt="" />
    </Slide>
    <slot></slot>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "CarouselSlide",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  mounted() {
    // this.doSlider();
  },

  data() {
    return {
      listImg: [
        {
          url: "https://shopping-phibachien.herokuapp.com/static/media/image-slider-1.35e219c8.png",
        },
        {
          url: "https://shopping-phibachien.herokuapp.com/static/media/image-slider-5.c2947ef4.png",
        },
        {
          url: "https://shopping-phibachien.herokuapp.com/static/media/image-slider-1.35e219c8.png",
        },
        {
          url: "https://shopping-phibachien.herokuapp.com/static/media/image-slider-5.c2947ef4.png",
        },
      ],
    };
  },

  methods: {
    doSlider: function () {
      const carouselSlide = document.querySelector(".carousel__slide");
      const carouselImages = document.querySelectorAll(".carousel__slide div");

      // button
      const prevBtn = document.querySelector("#prevBtn");
      const nextBtn = document.querySelector("#nextBtn");

      let counter = 0;

      nextBtn.addEventListener("click", () => {
        const size = carouselImages[0].clientWidth;
        console.log(size);
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      });
      prevBtn.addEventListener("click", () => {
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      });
    },
  },
};
</script>

<style lang="scss" >
@import "../assets/scss/components/carousel-slider.scss";

</style>
<!-- <div class="carousel__container">
    <div class="carousel__slide">
      <div v-for="(img, index) in listImg" :key="index" class="item__image">
        <img :src="img.url" alt="" />
      </div>
    </div>
  </div>
  <button id="prevBtn">Truoc</button>
  <button id="nextBtn">Sau</button> -->
