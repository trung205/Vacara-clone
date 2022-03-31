<template>
  <Layout>
    <div class="section__wrap">
      <div class="quick__link">
        <a href="/">Trang chủ</a>
        <a href="/">Giày</a>
        <a href="/">Giày Bít</a>
      </div>
      <div class="product__main d__flex">
        <div class="product__item" cds-layout="grid gap:lg">
          <div class="product__image" cds-layout="col:12">
            <img :src="filterProduct.image" alt="" />
          </div>
          <div class="product__image" cds-layout="col:6">
            <img src="../assets/images/product-detail-2.jpeg" alt="" />
          </div>
          <div class="product__image" cds-layout="col:6">
            <img src="../assets/images/product-detail-3.jpeg" alt="" />
          </div>
          <div class="product__image" cds-layout="col:6">
            <img src="../assets/images/product-detail-4.jpeg" alt="" />
          </div>
          <div class="product__image" cds-layout="col:6">
            <img src="../assets/images/product-detail-5.jpeg" alt="" />
          </div>
          <div class="tab" cds-layout="col:12">
            <div class="tab__header d__flex">
              <div
                class="tab__item"
                :class="{ active: tagInfo }"
                @click="changeTag"
              >
                THÔNG TIN CHI TIẾT
              </div>
              <div
                class="tab__item"
                :class="{ active: !tagInfo }"
                @click="changeTag"
              >
                HƯỚNG DẪN CHỌN SIZE
              </div>
            </div>
            <div class="tab__main">
              <div class="tab__item" v-if="tagInfo">
                <div class="line">
                  <h4>Mã sản phẩm</h4>
                  <p>1010BMN0418</p>
                </div>
                <div class="line">
                  <h4>Loại sản phẩm</h4>
                  <p>Giày Bít</p>
                </div>
                <div class="line">
                  <h4>Độ cao gót</h4>
                  <p>1 cm</p>
                </div>
                <div class="line">
                  <h4>Loại mũi</h4>
                  <p>Bít mũi nhọn</p>
                </div>
                <div class="line">
                  <h4>Chất liệu</h4>
                  <p>Satin</p>
                </div>
                <div class="line">
                  <h4>Hoa văn, chi tiết</h4>
                  <p>Một màu, đính nơ</p>
                </div>
                <div class="line">
                  <h4>Phù hợp sử dụng</h4>
                  <p>Đi làm, đi tiệc, đi chơi</p>
                </div>
              </div>
              <div class="tab__item" v-else>
                <img
                  src="https://shopping-phibachien.herokuapp.com/static/media/size-tutorial.4ccbcbff.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="product__item">
          <h2 class="title">
            {{ filterProduct.product_title }}
          </h2>
          <div class="product__status">NEW</div>
          <div class="price">545.000 ₫</div>
          <h5 class="size__title">
            Kích cỡ | <span>{{ cart.size }}</span>
          </h5>
          <div class="size d__flex">
            <template v-for="(item, index) in sizeList" :key="index">
              <div
                :class="{
                  out__of__stock: !item.checked,
                  active: item.size == cart.size,
                }"
                class="size__block"
                @click="setSize(item.size)"
              >
                {{ item.size }}
              </div>
            </template>
          </div>
          <h5 class="size__title">Số lượng</h5>
          <div class="amount">
            <span
              class="minus"
              @click="cart.count--"
              :class="{ disable: cart.count == 1 }"
              >-</span
            >
            <span class="value">{{ cart.count }}</span>
            <span class="plus" @click="cart.count++">+</span>
          </div>
          <h5 class="size__title">Màu sắc</h5>
          <div cds-layout="grid cols:4 gap:lg" class="other__color">
            <template v-for="(item, index) in colorList" :key="index">
              <div
                @click="setColor(item.color)"
                class="other__color__item"
                :class="{ active: item.color == cart.color }"
              >
                <img :src="item.img" alt="" />
              </div>
            </template>
          </div>
          <cds-button
            size="icon"
            action="outline"
            status="danger"
            class="btn__cart"
            @click="addToCart"
            >Thêm vào giỏ hàng</cds-button
          >
        </div>
      </div>
      <div class="category__section">
        <Category title="SẢN PHẨM XEM CÙNG">
          <CarouselCard :products="array" />
        </Category>
      </div>
    </div>
    <div class="action__toast" v-show="popup">
      <div class="toast">
        <div class="toast__container">
          <div class="toast__icon">
            <div class="action__toast__icon">
              <svg
                enable-background="new 0 0 12 12"
                viewBox="0 0 12 12"
                x="0"
                y="0"
                class="shopee-svg-icon icon-tick-bold"
              >
                <g>
                  <path
                    fill="#fff"
                    d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="toast__text">Sản phẩm đã được thêm vào Giỏ hàng</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layouts.vue";
import Category from "../components/Category.vue";
import CarouselCard from "../components/CarouselCard.vue";
import { Product, SizeList, ColorList } from "../mock/mock.js";
import { mapActions } from "vuex";

export default {
  name: "ProductDetail",
  components: {
    Layout,
    CarouselCard,
    Category,
  },

  data() {
    return {
      cart: {
        id: this.$route.params.id,
        size: "Tất cả",
        count: 1,
        color: null,
        price: 545,
        product: null,
      },
      sizeList: SizeList,

      colorList: ColorList,

      tagInfo: true,
      array: [...Product],
      popup: false,
    };
  },

  methods: {
    ...mapActions("productCart", ["setCart"]),
    setSize(size) {
      this.cart.size = size;
    },

    setColor(color) {
      this.cart.color = color;
    },

    changeTag() {
      this.tagInfo = !this.tagInfo;
    },

    addToCart() {
      this.setCart(this.cart);
      this.popup = true;
      setTimeout(() => {
        this.popup = false;
      }, 2000);
    },
  },

  computed: {
    filterProduct() {
      const product = this.array.filter((el) => el.id == this.$route.params.id);
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.cart.product = product[0];
      return product[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/product-detail.scss";
</style>
