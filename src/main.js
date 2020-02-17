import Vue from 'vue'
import App from './App.vue'
import VueCookie from 'vue-cookie';
import Qs from 'qs'
import Consts from './components/consts.js';
import CrdConf from './config/config.js';

Vue.config.productionTip = false

Vue.use(VueCookie).use(Qs).use(Consts).use(CrdConf);

new Vue({
  render: h => h(App),
}).$mount('#app');