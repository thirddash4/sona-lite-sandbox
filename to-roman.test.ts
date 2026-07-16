import { expect, test } from "bun:test";
import { toRoman } from "./to-roman";

test("toRoman(n) uses subtractive notation, including combined cases", () => {
  expect(toRoman(4)).toBe("IV");
  expect(toRoman(9)).toBe("IX");
  expect(toRoman(40)).toBe("XL");
  expect(toRoman(90)).toBe("XC");
  expect(toRoman(400)).toBe("CD");
  expect(toRoman(900)).toBe("CM");
  expect(toRoman(944)).toBe("CMXLIV");
  expect(toRoman(1994)).toBe("MCMXCIV");
  expect(toRoman(2444)).toBe("MMCDXLIV");
  expect(toRoman(1)).toBe("I");
  expect(toRoman(3999)).toBe("MMMCMXCIX");
});
