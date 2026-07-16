import { expect, test } from "bun:test";
import { triple } from "./triple";

test("triple(n) returns n * 3", () => {
  expect(triple(2)).toBe(6);
  expect(triple(0)).toBe(0);
  expect(triple(-3)).toBe(-9);
});
