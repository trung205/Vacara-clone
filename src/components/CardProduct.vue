<template>
  <cds-card aria-labelledby="containerOfCards1" @click="goToProduct">
    <div class="card__img">
      <img :src="product.image" alt="" />
    </div>
    <div class="card__block">
      <div class="product__price" cds-layout="horizontal gap:md">
        <p class="price">{{ product.price }} {{ "  ₫" }}</p>
        <div v-show="product.price_del" class="price del">
          {{ product.price_del }}{{ "  ₫" }}
        </div>
      </div>
      <div class="product__title">{{ product.product_title }}</div>
      <div class="product__status">NEW</div>
    </div>
  </cds-card>
</template>

<script>
import "@cds/core/global.min.css";
import "@cds/city/css/bundles/default.min.css";
import "@cds/core/accordion/register.js";
import "@cds/core/input/register.js";
export default {
  name: "CardProduct",
  props: {
    product: Object,
  },

  data() {
    return {};
  },

  methods: {
    goToProduct() {
      this.$router.push("/product");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/card-product.scss";
</style>
