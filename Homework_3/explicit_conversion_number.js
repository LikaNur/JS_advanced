function convertToNumberUsingNumber(value) {
  return Number(value);
}

function convertToNumberUsingParseInt(value) {
  return parseInt(value, 10);
}

function convertToNumberUsingParseFloat(value) {
  return parseFloat(value);
}

const values = [
  "42",
  "42.58",
  "text",
  true,
  false,
  null,
  undefined,
  "123abc",
  "abc123",
  "",
];

values.forEach((value) => {
  console.log(`Value: ${value}`);
  console.log(`Number(): ${convertToNumberUsingNumber(value)}`);
  console.log(`parseInt(): ${convertToNumberUsingParseInt(value)}`);
  console.log(`parseFloat(): ${convertToNumberUsingParseFloat(value)}`);
  console.log("----------------------");
});
