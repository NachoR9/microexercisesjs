export function calculator(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "unknown value";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "unknown value";
  }

}
