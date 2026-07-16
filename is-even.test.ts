import { expect, test } from "bun:test";
import { isEven } from "./is-even";

test("isEven(n) returns true for even, false for odd", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(-4)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(-7)).toBe(false);
});
