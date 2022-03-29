import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import {router} from './router'
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';
import '@cds/core/card/register.js';

createApp(App)
.use(store)
.use(router)
.mount('#app')
