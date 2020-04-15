
import Vuex from 'vuex';
import { shallowMount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils'

import LoanCalculator from '@/components/LoanCalculator';
import mutations from '@/store/mutations';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('LoanCalculator.vue', () => {
  let actions;
  let store;
  let loanCalculatorShallowWrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        loanAmount: 11000,
        duration: 2,
        monthlyInstallment: 5075.94,
        interest: 10,
      },
      actions,
      mutations
    });
    loanCalculatorShallowWrapper = shallowMount(LoanCalculator, { localVue, store }, {
      stubs: {
        'base-input': true,
      }
    });
  });
  it('should render Vue instance', () => {
    expect(loanCalculatorShallowWrapper.isVueInstance()).toBeTruthy();
  });
  it('should contain form elements', () => {
    expect(loanCalculatorShallowWrapper.find('div.loan_calc_form').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.amount').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.duration').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.submit').exists()).toBe(true);
  });

  it('should contain installment view elements', () => {
    expect(loanCalculatorShallowWrapper.find('div.loan_calc_view').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.loan_calc_view_installment').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.loan_calc_view_interest').exists()).toBe(true);
  });

  it('should contains stubbed child form elements', () => {
    expect(loanCalculatorShallowWrapper.find('div.amount baseinput-stub').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.duration baseinput-stub').exists()).toBe(true);
    expect(loanCalculatorShallowWrapper.find('div.submit basebutton-stub').exists()).toBe(true);
  });

  it('should have form elements with respective props', () => {
    const amountProps = loanCalculatorShallowWrapper.find('div.amount baseinput-stub').props();
    const durationProps = loanCalculatorShallowWrapper.find('div.duration baseinput-stub').props();
    const submitProps = loanCalculatorShallowWrapper.find('div.submit basebutton-stub').props();
    expect(amountProps).toBeTruthy();
    expect(amountProps.type).toBe('number');
    expect(amountProps.label).toBe('Amount');
    expect(amountProps.subLabel).toBe('(10 000 to 100 000)');
    expect(amountProps.focusOut).toBeTruthy()
    expect(durationProps).toBeTruthy();
    expect(durationProps.type).toBe('number');
    expect(durationProps.label).toBe('duration');
    expect(durationProps.subLabel).toBe('(1 to 5 years)');
    expect(durationProps.focusOut).not.toBeTruthy();
    expect(submitProps.label).toBe('OK');
    expect(submitProps.type).toBe('primary');
    expect(submitProps.size).toBe('small');
  });

  it('should have view elements with respective props', () => {
    const viewInstallmentProps = loanCalculatorShallowWrapper.find('div.loan_calc_view basetitle-stub').props();
    const interestInstallmentProps = loanCalculatorShallowWrapper.find('div.loan_calc_view_interest basetitle-stub').props();
    expect(viewInstallmentProps.title).toBe('monthly installment');
    expect(viewInstallmentProps.level).toBe('small');
    expect(viewInstallmentProps.type).toBe('primary');

    expect(interestInstallmentProps.title).toBe('interest');
    expect(interestInstallmentProps.level).toBe('small');
    expect(interestInstallmentProps.type).toBe('primary');
  });
});