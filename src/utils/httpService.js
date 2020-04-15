/**
 * @description mock server which provides service and resolves after the 1s 
 * @returns response with calculated monthly installment with default rate of interest
 * 
*/
const calculateLoan = (request) => {
  const timeToResolve = 1000;
  try {
    const {
      amount,
      duration,
      interest
    } = request;
    const months = 12;
    const monthlyInterestRatio = (interest / 100) / months;
    const topRate = Math.pow((1 + monthlyInterestRatio), duration * months);
    const bottomRate = topRate - 1;
    const emiBalance = topRate / bottomRate;
    const emi = ((amount * interest / months / 10) * emiBalance);
   return new Promise((resolve) => {
      let time = setTimeout(() => {
        clearTimeout(time);
        resolve({ amount, duration, monthlyInstallment: emi.toFixed(2) });
      }, timeToResolve);
   })
  } catch (e) {
    throw e;
  }
}

export const httpService = () => {
  return {
    ['post']: (url, body) => {
      switch (url) {
        case '/api/loan/calculate/':
          return calculateLoan(body)
      }
    }
  }
};