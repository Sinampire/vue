import Vue from 'vue';
import Interface from './interface';

const AxiosRequest = new Interface();

Vue.prototype.AxiosRequest = AxiosRequest;

Vue.config.productionTip = false;
