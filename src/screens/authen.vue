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
        <form class="sign-up" action="#" @submit.prevent="submitRegister">
          <h2>Tạo tài khoản</h2>
          <input type="text" placeholder="Name" v-model="register.data.name" />
          <input
            type="email"
            placeholder="Email"
            v-model="register.data.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="register.data.password"
          />
          <button type="submit">Đăng ký</button>
        </form>
        <form class="sign-in" action="#" @submit.prevent="submitLogin">
          <h2>Đăng nhập</h2>
          <div>Tài khoản của bạn</div>
          <input type="email" placeholder="Email" v-model="login.data.email" />
          <input
            type="password"
            placeholder="Password"
            v-model="login.data.password"
          />
          <a href="#">Quên mật khẩu?</a>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
import { accounts } from "../mock/mock";
import { setUserSession } from "../common/token";

export default {
  name: "VascaraAuthen",
  data() {
    return {
      signUp: this.$route.params.type == "sign-up",
      login: {
        data: {
          email: null,
          password: null,
        },
        error: null,
      },

      register: {
        data: {
          name: null,
          email: null,
          password: null,
        },
        error: null,
      },
    };
  },

  methods: {
    checkFormLogin: function () {
      let formIsValid = true;
      if (!this.login.data.email) {
        formIsValid = false;
        this.login.error = "Chưa nhập email";
      }
      if (!this.validEmail(this.login.data.email)) {
        formIsValid = false;
        this.login.error = "Email không đúng";
      }
      if (!this.login.data.password) {
        formIsValid = false;
        this.login.error = "Chưa nhập mật khẩu";
      }
      return formIsValid;
    },

    checkFormRegister: function () {
      let formIsValid = true;
      if (!this.register.data.name) {
        formIsValid = false;
        this.register.error = "Chưa nhập tên";
      }
      if (!this.register.data.email) {
        formIsValid = false;
        this.register.error = "Chưa nhập email";
      }
      if (!this.validEmail(this.register.data.email)) {
        formIsValid = false;
        this.register.error = "Email không đúng";
      }
      if (!this.register.data.password) {
        formIsValid = false;
        this.register.error = "Chưa nhập mật khẩu";
      }
      return formIsValid;
    },

    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    submitRegister: function () {
      if (this.checkFormRegister()) {
        accounts.push({
          id: accounts.length + 1,
          ...this.register.data,
        });
        console.log(accounts);
        alert("Đăng ký thành công");
      } else {
        alert("Đăng ký thất bại", this.register.error);
      }
    },

    submitLogin: function () {
      if (this.checkFormLogin()) {
        const foundAccount = accounts.find((element) => {
          return (
            element.email == this.login.data.email &&
            element.password == this.login.data.password
          );
        });
        if (foundAccount) {
          console.log(foundAccount);
          setUserSession(foundAccount.id, foundAccount);
          alert("Đăng nhập thành công");
          this.$router.push("/");
        } else {
          alert("Email hoặc mật khẩu không đúng");
        }
      } else {
        alert(this.login.error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/authen.scss";
</style>
