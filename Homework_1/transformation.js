function transformArrayToString(products) {
  if (products.length === 0) return " ";

  const transformedProducts = products.map((product) => {
    return `${product.name} (цена: $${product.price.toFixed(2)}, количество: ${
      product.quantity
    })`;
  });

  return transformedProducts.join(", ");
}

const products = [
  { name: "Macbook Air", price: 999, quantity: 3 },
  { name: "IPhone 14 PRO Max", price: 800, quantity: 10 },
  { name: "Apple iPad Air", price: 509.99, quantity: 5 },
];

console.log(transformArrayToString(products));
