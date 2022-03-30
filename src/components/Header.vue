<template>
  <div class="header">
    <div class="header__wrap section__wrap">
      <div class="header__logo">
        <div class="header__nav__btn">
          <img src="../assets/images/icon-bars.f107bd7f.svg" />
        </div>
        <a href="/">
          <img src="../assets/images/logo.png" alt="" />
        </a>
      </div>
      <div class="header__location">
        <p>Chọn kho giao hàng</p>
        <div>
          <span>Hà Nội</span>
          <img src="" />
        </div>
      </div>
      <div class="header__search">
        <img src="../assets/images/logo_search.png" alt="" />
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div class="header__authen">
        <router-link :to="{ name: 'Authen', params: { type: 'sign-up' } }">
          <a href="">ĐĂNG KÝ</a>
        </router-link>
        <span>/</span>
        <router-link :to="{ name: 'Authen', params: { type: 'sign-in' } }">
          <a href="">ĐĂNG NHẬP</a>
        </router-link>
      </div>
      <div class="header__cart" @click="goToCart">
        <div class="search_mobile"></div>
        <img src="../assets/images/logo_cart.png" alt="" />
        <span :class="{ text__red: getCart.data?.length !== 0 }"
          >({{ getCart.data?.length }})</span
        >
      </div>
    </div>
    <div class="list__menu">
      <ul>
        <template v-for="(item, index) in menu" :key="index">
          <li>
            <router-link
              :to="{ name: 'ProductFilter', params: { query: item.type } }"
            >
              <a>{{ item.name }}</a>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderCom",
  data() {
    return {
      menu: [
        { name: "Giày", link: "/giay", type: "giay" },
        { name: "Túi xách", link: "/tui-xach", type: "tui-xach" },
        { name: "Balo", link: "/balo", type: "balo" },
        { name: "Ví bóp", link: "/vi-bop", type: "vi-bop" },
        { name: "Dép & Guốc", link: "/dep-guoc", type: "dep-guoc" },
        { name: "Phụ kiện", link: "/", type: "home" },
        { name: "Giftcard", link: "/", type: "home" },
        { name: "Saleoff", link: "/", type: "home" },
        { name: "New arrival", link: "/", type: "home" },
        { name: "Summer Kisses", link: "/", type: "home" },
        { name: "Tin Tức", link: "/", type: "home" },
      ],
    };
  },

  mounted() {
    const listMenu = document.querySelector(".list__menu");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 125) {
        listMenu?.classList.add("active");
      } else {
        listMenu?.classList.remove("active");
      }
    });
  },

  computed: {
    ...mapGetters("productCart", ["getCart"]),
  },

  methods: {
    goToCart() {
      this.$router.push("/product-cart");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/components/header.scss";
</style>
