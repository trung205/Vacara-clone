<template>
  <Layout>
    <div class="section__wrap">
      <Category>
        <div cds-layout="grid cols@sm:6 cols@md:3 gap:md">
          <CardProduct
            v-for="(value, index) in filterProducts"
            :key="index"
            :product="value"
          ></CardProduct>
        </div>
      </Category>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layouts.vue";
import Category from "../components/Category.vue";
import CardProduct from "../components/CardProduct.vue";
import { Product } from "../mock/mock";

export default {
  name: "ProductFilter",
  components: {
    Layout,
    Category,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.products = [...Product];
  },

  computed: {
    filterProducts() {
      return this.products.filter((el) => el.type == this.$route.params.query);
    },
  },
};
</script>

<style></style>
