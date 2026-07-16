import { expect, test } from "bun:test";
import { square } from "./square";

test("square(n) returns n * n", () => {
  expect(square(3)).toBe(9);
  expect(square(0)).toBe(0);
  expect(square(-4)).toBe(16);
});
