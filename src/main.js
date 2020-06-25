import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import store from './Store';
import {componentRegistry} from "./registry";

import 'material-design-icons-iconfont/dist/material-design-icons.css'

componentRegistry(Vue);
Vue.config.productionTip = false;

new Vue({
  vuetify, router, store,
  render: h => h(App)
}).$mount('#app');
