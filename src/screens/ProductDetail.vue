<template>
  <Layout>
    <div class="section__wrap">
        <div class="quick__link">
          <a href="/">Trang chủ</a>
          <a href="/">Giày</a>
          <a href="/">Giày Bít</a>
        </div>
        <div class="product__main">
          <div class="product__item">
            <div class="product__image">
              
            </div>
            <div class="product__image"></div>
            <div class="product__image"></div>
            <div class="product__image"></div>
            <div class="product__image"></div>
          </div>
          <div class="product__item"></div>
          <div class="product__item"></div>
        </div>
        <div class="category__section"></div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layouts.vue";

export default {
  name: "ProductDetail",
  components: {
    Layout,
  },
};
</script>

<style></style>
