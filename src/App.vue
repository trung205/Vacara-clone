<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import '@cds/core/global.min.css';
import '@cds/city/css/bundles/default.min.css';
import '@cds/core/accordion/register.js';
import '@cds/core/input/register.js';

export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
li {
  margin: 0;
  padding: 0;
}

li,
ul {
  list-style: none;
}
</style>
