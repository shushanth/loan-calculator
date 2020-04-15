const MIN_AMOUNT = 10000;
const MAX_AMOUNT = 100000;
const MIN_DURATION = 1;
const MAX_DURATION = 5;


export default {
  isFormSafe: (_, {
    durationInvalid,
    loanAmountInvalid
  }) => durationInvalid || loanAmountInvalid,
  durationInvalid: ({
    duration
  }) => !(duration >= MIN_DURATION && duration <= MAX_DURATION) || false,
  loanAmountInvalid: ({
    loanAmount
  }) => {
    const amt = parseInt(loanAmount);
    return !(amt >= MIN_AMOUNT && amt <= MAX_AMOUNT) || false;
  },
};