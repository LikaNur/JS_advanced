const toUpperCase = (str) => str.toUpperCase();

const toLowerCase = (str) => str.toLowerCase();

const replaceSubstring = (str, oldSubstring, newSubstring) =>
  str.replace(oldSubstring, newSubstring);

const splitString = (str, delimiter) => str.split(delimiter);

const trimString = (str) => str.trim();

const text = "  Hello, World!  ";

console.log("Верхний регистр:", toUpperCase(text));
console.log("Нижний регистр:", toLowerCase(text));
console.log("Замена подстроки:", replaceSubstring(text, "World", "JavaScript"));
console.log("Разбиение строки:", splitString(text, ","));
console.log("Удаление пробелов:", trimString(text));
