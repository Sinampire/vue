import Vue from 'vue';
import Index from './Index.vue';
import axios from 'axios';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Index),
}).$mount('#root');