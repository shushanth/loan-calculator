import mutations from '@/store/mutations';

const {
  UPDATE_LOAN_AMOUNT,
  UPDATE_DURATION,
  HANDLE_AMOUNT_SUFFIX,
  CALC_MONTH_INSTALLMENT
} = mutations;

describe('store:mutations', () => {
  it('UPDATE_LOAN_AMOUNT', () => {
    const mockState = {
      loanAmount: 11000,
    };
    UPDATE_LOAN_AMOUNT(mockState, 10000);
    expect(mockState.loanAmount).toEqual(10000);
  });

  it('UPDATE_DURATION', () => {
    const mockState = {
      duration: 4
    };
    UPDATE_DURATION(mockState, 3);
    expect(mockState.duration).toEqual(3)
  });

  it('HANDLE_AMOUNT_SUFFIX', () => {
    const mockState = {
      loanAmount: "10200.5473"
    }
    HANDLE_AMOUNT_SUFFIX(mockState);
    expect(mockState.loanAmount).toEqual("10200.55")
  });

  it('CALC_MONTH_INSTALLMENT', () => {
    const mockState = {
      monthlyInstallment: ''
    }
    CALC_MONTH_INSTALLMENT(mockState, 1000);
    expect(mockState.monthlyInstallment).toEqual(1000);
  })
})