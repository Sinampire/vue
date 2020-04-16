import Vue from 'vue';
import Index from './Index.vue';
import '../../assets/js/common';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Index),
}).$mount('#root');
