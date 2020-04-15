import getters from '@/store/getters';

const {
  durationInvalid,
  loanAmountInvalid,
} = getters;

describe('store:getters', () => {
  it('durationInvalid', () => {
    const inValidMockState = {
      duration: 7
    };
    const validMockState = {
      duration: 2
    };
    const isDurationInValid = durationInvalid(inValidMockState);
    expect(isDurationInValid).toBe(true);
    const isDurationValid = durationInvalid(validMockState);
    expect(isDurationValid).toBe(false);
  });

  it('loanAmountInvalid', () => {
    const validMockState = {
      loanAmount: 10000
    };
    const inValidMockState = {
      loanAmount: 1000000
    }
    const isLoanAmountInvalid = loanAmountInvalid(validMockState);
    const isLoanAmountValid = loanAmountInvalid(inValidMockState);
    expect(isLoanAmountInvalid).toBe(false);
    expect(isLoanAmountValid).toBe(true);
  });
});