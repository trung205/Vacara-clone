<template>
  <Layout>
    <CarouselSlider> </CarouselSlider>
    <Category title="HOT TREND 2020">
      <img src="../assets/media/banner-gif.b3c92793.gif" alt="" />
    </Category>
    <Category title="SẢN PHẨM MỚI NHẤT">
      <div cds-layout="grid cols@sm:6 cols@md:3 gap:md">
        <CardProduct
          v-for="(value, index) in array"
          :key="index"
          :product="value"
        ></CardProduct>
      </div>
    </Category>
    <Category title="SẢN PHẨM KHUYẾN MÃI" :all="true">
      <CarouselCard :products="array" />
    </Category>
    <Category title="SẢN PHẨM BÁN CHẠY" :all="true">
      <CarouselCard :products="array" />
    </Category>
    <Category title="SẢN PHẨM NỔI BẬT" :all="true">
      <CarouselCard :products="array" />
    </Category>
  </Layout>
</template>

<script>
import Layout from "../components/Layouts.vue";
import CarouselSlider from "../components/CarouselSlider.vue";
import Category from "../components/Category.vue";
import CardProduct from "../components/CardProduct.vue";
import CarouselCard from "../components/CarouselCard.vue";
import { Product } from "../mock/mock.js";

export default {
  name: "HomePage",
  components: {
    Layout,
    CarouselSlider,
    Category,
    CardProduct,
    CarouselCard,
  },

  data() {
    return {
      array: Product,
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
};
</script>

<style></style>
