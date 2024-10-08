const keyWords = ["function", "return"];
const punctuator = ["(", ")", ",", "+", "{", "}"];

function parser(code) {
  const words = code
    .split(/(\s+|[(){};, +])/)
    .filter((token) => token.trim().length > 0);

  const tokens = words.map((token) => {
    if (keyWords.includes(token)) {
      return { type: "Keyword", value: token };
    } else if (punctuator.includes(token)) {
      return { type: "Punctuator", value: token };
    } else if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(token)) {
      return { type: "Identifier", value: token };
    }
    return null;
  });

  return tokens.filter((token) => token !== null);
}

const code = `
    function add(a, b) {
        return a + b;
    }
`;

const tokens = parser(code);
console.log(tokens);
