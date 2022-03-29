<template>
  <div class="section__wrap category__section">
    <h2 class="title__block">{{ title }}</h2>
    <a href="/" v-show="all" class="show__all">Xem tất cả</a>
    <slot></slot>
  </div>
  
</template>

<script>
export default {
  name: "CategoryProduct",
  props: {
    title: String,
    all: {
        type: Boolean,
        required: false,
        default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/components/category.scss";
</style>
