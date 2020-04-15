import Vue from 'vue';

import LoanCalculatorWidget from './App';
import store from '@/store/store';

export default new Vue({
  el: '#app',
  store,
  render: renderElement => renderElement(LoanCalculatorWidget)
});