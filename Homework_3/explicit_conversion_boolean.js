function convertToBooleanUsingBoolean(value) {
  return Boolean(value);
}

function convertToBooleanUsingDoubleNegation(value) {
  return !!value;
}

const values = ["", "hello", 0, 1, -1, null, undefined, {}, [], NaN];

values.forEach((value) => {
  console.log(`Value: ${value}`);
  console.log(`Boolean(): ${convertToBooleanUsingBoolean(value)}`);
  console.log(`!!: ${convertToBooleanUsingDoubleNegation(value)}`);
  console.log("----------------------");
});
