import { test, expect } from "bun:test";
import { halve } from "./halve";
test("halve(n) returns n / 2", () => {
  expect(halve(10)).toBe(5);
});
