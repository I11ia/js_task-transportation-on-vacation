/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;
  const sevenDaysDiscount = 50;
  const threeDatsDiscount = 20;

  if (days >= 7) {
    return cost - sevenDaysDiscount;
  }

  if (days >= 3 && days < 7) {
    return cost - threeDatsDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
