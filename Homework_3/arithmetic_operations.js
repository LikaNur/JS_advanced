const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Ошибка: деление на ноль невозможно";
    }
    return a / b;
};

console.log("Сложение 10 + 5:", add(10, 5));
console.log("Вычитание 10 - 5:", subtract(10, 5));
console.log("Умножение 10 * 5:", multiply(10, 5));
console.log("Деление 10 / 5:", divide(10, 5));
console.log("Деление 10 / 0:", divide(10, 0));
