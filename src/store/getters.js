export default {
  isFormSafe: (_, {
    durationInvalid,
    loanAmountInvalid
  }) => durationInvalid || loanAmountInvalid,
  durationInvalid: ({
    duration
  }) => !(duration >= 1 && duration <= 5) || false,
  loanAmountInvalid: ({
    loanAmount
  }) => {
    const amt = parseInt(loanAmount);
    return !(amt >= 10000 && amt <= 100000) || false;
  },
};