const findMaxValue = (numbers) => Math.max(...numbers);

const findMinValue = (numbers) => Math.min(...numbers);

const roundNumber = (num) => Math.round(num);

const ceilNumber = (num) => Math.ceil(num);

const floorNumber = (num) => Math.floor(num);

const findSquareRoot = (num) => Math.sqrt(num);

const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;

const numbers = [10, 5, 8, 12, 3];

console.log("Максимальное значение:", findMaxValue(numbers));
console.log("Минимальное значение:", findMinValue(numbers));
console.log("Округление 4.6:", roundNumber(4.6));
console.log("Округление вверх 4.2:", ceilNumber(4.2));
console.log("Округление вниз 4.8:", floorNumber(4.8));
console.log("Квадратный корень числа 16:", findSquareRoot(16));
console.log("Случайное число в диапазоне 1-100:", generateRandomNumber(1, 100));
