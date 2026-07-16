import { expect, test } from "bun:test";
import { quadruple } from "./quadruple";

test("quadruple(n) returns n * 4", () => {
  expect(quadruple(2)).toBe(8);
  expect(quadruple(0)).toBe(0);
  expect(quadruple(-3)).toBe(-12);
});
