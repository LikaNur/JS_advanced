const findSubstring = (str, substring) => str.indexOf(substring);

const extractSubstring = (str, start, length) => str.substr(start, length);

const checkSubstring = (str, substring) => str.includes(substring);

const formatString = (str, ...values) =>
  str.replace(/{(\d+)}/g, (match, number) => values[number] || "");

const text = "Hello, World!";

console.log("Поиск подстроки 'World':", findSubstring(text, "World"));
console.log("Извлечение подстроки:", extractSubstring(text, 7, 5));
console.log(
  "Проверка наличия подстроки 'Hello':",
  checkSubstring(text, "Hello")
);
console.log(
  "Форматирование строки:",
  formatString("Привет, {0}! Как твои {1}?", "Мир", "дела")
);
