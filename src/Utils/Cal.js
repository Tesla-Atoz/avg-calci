export function calQuantity(price, ltp) {
  return price / ltp;
}

export function calAvgBuyPrice(
  initialInvestedAmount,
  toInvestAmount,
  initialQuantity,
  curInvestQuantity
) {
  const totalAmount = initialInvestedAmount + toInvestAmount;
  const totalQuantity = initialQuantity + curInvestQuantity;

  return totalAmount / totalQuantity;
}

export function calPercent(newAvgBuyPrice, ltpOfAsset) {
  return ((ltpOfAsset - newAvgBuyPrice) / newAvgBuyPrice) * 100;
}
