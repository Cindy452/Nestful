export const futureValue = (
  presentValue,
  additionalAnnualInvestment,
  annualRateOfReturn,
  periods
) => {

  let rateOfReturnMultiplier = Math.pow(1 + annualRateOfReturn, periods);
  let currentSavingsFV = presentValue * rateOfReturnMultiplier;
  let additionalAnnualInvestmentFV =
    (additionalAnnualInvestment * (rateOfReturnMultiplier - 1)) /
    annualRateOfReturn;
  return currentSavingsFV + additionalAnnualInvestmentFV;
};


// export const nesteggLifeTime = (
//   presentValue,
//   annualRateOfReturn,
//   annualContribution,
//   annualWithdrawl
// ) => {
//   //log(d/r(PV) + 1) / log(1+r) = t
//   const yearsLeft = (Math.log((annualContribution/annualRateOfReturn)*presentValue + 1 / Math.log(1 + annualRateOfReturn)));

//   console.log(yearsLeft);
//   return yearsLeft;
// };
