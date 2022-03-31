<template>
  <Layout>
    <div class="section__wrap">
      <div cds-layout="vertical gap:md" class="card">
        <div class="card__header">
          <div class="card__header__flex d__flex">
            <h5>Tổng</h5>
            <cds-button status="success" @click="logOut">Đăng xuất</cds-button>
          </div>
        </div>
        <div class="card__body">
          <table>
            <thead>
              <tr cds-layout="grid cols@sm:6 cols@md:2 gap:md">
                <th>Sản phẩm</th>
                <th>Phân loại</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in getCart.data" :key="index">
                <tr cds-layout="grid cols@sm:6 cols@md:2 gap:md">
                  <td>
                    <img
                      :src="item.product.image"
                      alt=""
                    />
                  </td>
                  <td>{{ item.size }}</td>
                  <td>{{ item.product.price }}</td>
                  <!-- <td>{{ item.count }}</td> -->
                  <td>
                    <div class="amount">
                      <span
                        class="minus"
                        @click="item.count--"
                        :class="{ disable: item.count == 1 }"
                        >-</span
                      >
                      <span class="value">{{ item.count }}</span>
                      <span class="plus" @click="item.count++">+</span>
                    </div>
                  </td>
                  <td>{{ item.count * item.product.price }}</td>
                  <td>
                    <cds-button status="danger" @click="deleteCart(item)"
                      >Xóa</cds-button
                    >
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layouts.vue";
import { mapActions, mapGetters } from "vuex";
import { removeUserSession } from "../common/token";

export default {
  name: "ProductCart",
  components: {
    Layout,
  },

  mounted() {
    console.log(this.getCart);
  },
  computed: {
    ...mapGetters("productCart", ["getCart"]),
  },
  methods: {
    ...mapActions("productCart", ["deleteCart"]),
    logOut() {
      removeUserSession();
      this.$router.push("/");
      alert("Đăng xuất thành công");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/product-cart.scss";
</style>
