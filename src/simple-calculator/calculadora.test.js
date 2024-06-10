import { describe, expect, it } from "vitest";
import { calculator } from "./calculadora";

it("calculator can sum numbers", () => {
  //Given
  const five = 5;
  const six = 6;
  const operator = "+";
  //When
  const result = calculator(five, six, operator);
  //Then
  expect(result).toEqual(11);
});

it("calculator can subtract numbers", () => {
  //Given
  const three = 3;
  const two = 2;
  const operator = "-";
  //When
  const result = calculator(three, two, operator);
  //Then
  expect(result).toEqual(1);
});

it("calculator can multiplicate numbers", () => {
  //Given
  const three = 3;
  const two = 2;
  const operator = "*";
  //When
  const result = calculator(three, two, operator);
  //Then
  expect(result).toEqual(6);
});

it("calculator can divide numbers", () => {
  //Given
  const three = 3;
  const two = 2;
  const operator = "/";
  //When
  const result = calculator(three, two, operator);
  //Then
  expect(result).toEqual(1.5);
})

  it("calculator numbers are not numbers", () => {
    //Given
    const character = "A";
    const threeString = "3";
    const operator = "+";
    //When
    const result = calculator(character, threeString, operator);
    //Then
    expect(result).toEqual("unknown value");
  });

