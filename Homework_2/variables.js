function manageStock() {
  var currentStock = 100;
  let receivedToday = 50;
  const maxCapacity = 200;

  currentStock += receivedToday;

  if (currentStock > maxCapacity) {
    console.log("Ошибка: превышена емкость склада!");
  } else {
    console.log(`Текущее количество товаров: ${currentStock}`);
  }

  receivedToday = 30;
  currentStock += receivedToday;

  if (currentStock > maxCapacity) {
    console.log("Ошибка: превышена емкость склада!");
  } else {
    console.log(`Текущее количество товаров: ${currentStock}`);
  }
}

manageStock();
