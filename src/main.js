import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index.js'
import VueRouter from 'vue-router'
import router from './router/index.js'
import { Button, Select } from 'element-ui';



Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

//创建vm
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
