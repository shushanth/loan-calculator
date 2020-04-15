import mutationTypes from './mutation-types';
import {
  httpService
} from '@/utils/httpService';
const httpAjax = httpService();

export default {
  CALC_LOAN_INSTALLMENT({
    commit,
    state: {
      loanAmount,
      duration,
      interest
    }
  }) {
    const requestBody = {
      duration,
      interest,
      amount: loanAmount,
    };
    const emi = httpAjax.post('/api/loan/calculate/', requestBody);
    emi.then(({
      monthlyInstallment
    }) => commit(mutationTypes.calcMonthInstallment, monthlyInstallment));
  }
};