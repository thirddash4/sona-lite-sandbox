import { expect, test } from "bun:test";
import { decrementBy } from "./decrement-by";

test("decrementBy(n, k) returns n - k", () => {
  expect(decrementBy(5, 2)).toBe(3);
  expect(decrementBy(0, 0)).toBe(0);
  expect(decrementBy(2, 5)).toBe(-3);
  expect(decrementBy(-3, -1)).toBe(-2);
});
