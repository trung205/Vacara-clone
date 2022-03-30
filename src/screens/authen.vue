<template>
  <div id="app">
    <article>
      <div class="container" :class="{ 'sign-up-active': signUp }">
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-left">
              <h2>Chào mừng!</h2>
              <p>Vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
              <button class="invert" id="signIn" @click="signUp = !signUp">
                Đăng nhập
              </button>
            </div>
            <div class="overlay-right">
              <h2>Hello, Friend!</h2>
              <p>Please enter your personal details</p>
              <button class="invert" id="signUp" @click="signUp = !signUp">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
        <form class="sign-up" action="#">
          <h2>Tạo tài khoản</h2>
          <input type="text" placeholder="Name" v-model="register.name" />
          <input type="email" placeholder="Email" v-model="register.email" />
          <input
            type="password"
            placeholder="Password"
            v-model="register.password"
          />
          <button>Đăng ký</button>
        </form>
        <form class="sign-in" action="#">
          <h2>Đăng nhập</h2>
          <div>Tài khoản của bạn</div>
          <input type="email" placeholder="Email" v-model="login.email" />
          <input
            type="password"
            placeholder="Password"
            v-model="login.password"
          />
          <a href="#">Quên mật khẩu?</a>
          <button>Đăng nhập</button>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "VascaraAuthen",
  data() {
    return {
      signUp: this.$route.params.type == "sign-up",
      login: {
        email: null,
        password: null,
      },

      register: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/authen.scss";
</style>
