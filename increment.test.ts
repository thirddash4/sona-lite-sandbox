import { expect, test } from "bun:test";
import { increment } from "./increment";

test("increment(n) returns n + 1", () => {
  expect(increment(2)).toBe(3);
  expect(increment(0)).toBe(1);
  expect(increment(-3)).toBe(-2);
});
