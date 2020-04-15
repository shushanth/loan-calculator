import mutationTypes from './mutation-types';

export default {
  [mutationTypes.updateLoanAmount](state, loanAmount) {
    state.loanAmount = loanAmount;
  },
  [mutationTypes.updateDuration](state, duration) {
    state.duration = duration;
  },
  [mutationTypes.handleAmountSuffix](state) {
    state.loanAmount = Number(state.loanAmount).toFixed(2);
  },
  [mutationTypes.calcMonthInstallment](state, monthlyInstallment) {
    state.monthlyInstallment = monthlyInstallment;
  }
};