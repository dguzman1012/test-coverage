const { sum, decrement } = require("../src/");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtracts 2 from 3 to equal 1", () => {
  expect(decrement(3, 2)).toBe(1);
});

test("should fail the sum test", () => {
  expect(sum(1, 2)).toBe(4);
});