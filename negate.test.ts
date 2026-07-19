import { expect, test } from "bun:test";
import { negate } from "./negate";

test("negate(n) returns -n", () => {
  expect(negate(2)).toBe(-2);
  expect(negate(0)).toBe(0);
  expect(negate(-3)).toBe(3);
});
