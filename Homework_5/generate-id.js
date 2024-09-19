function generateId() {
  const randomNum = Math.floor(Math.random() * 10000);
  return `id-${randomNum}`;
}

console.log(generateId());
console.log(generateId());
