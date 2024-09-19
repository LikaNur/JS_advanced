function calculateDiscount(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

console.log(calculateDiscount(1000, 15));
