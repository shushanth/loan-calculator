/** 
 * @ store: app store
 * Strict mode runs a synchronous deep watcher on the state tree for detecting inappropriate mutations, 
 * and it can be quite expensive when you make large amount of mutations to the state. 
 * Make sure to turn it off in production to avoid the performance cost.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  loanAmount: 11000,
  duration: 2,
  monthlyInstallment: 5075.94,
  interest: 10,
};

const storeOptions = {
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
};

export default new Vuex.Store(storeOptions);