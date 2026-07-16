import { expect, test } from "bun:test";
import { reverseGraphemes } from "./reverse-graphemes";

test("reverseGraphemes reverses by grapheme cluster, keeping ZWJ emoji intact", () => {
  // U+1F468 ZWJ U+1F469 ZWJ U+1F467 ZWJ U+1F466 — family: man, woman, girl, boy
  const family = "\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}\u{200D}\u{1F466}";

  // Plain ASCII reverses per character.
  expect(reverseGraphemes("abc")).toBe("cba");
  expect(reverseGraphemes("")).toBe("");

  // The ZWJ sequence moves as one unbroken unit, like a single character.
  expect(reverseGraphemes(`ab${family}cd`)).toBe(`dc${family}ba`);

  // The sequence itself is not corrupted or internally reordered.
  const reversed = reverseGraphemes(`x${family}`);
  expect(reversed).toBe(`${family}x`);
  expect(reversed.includes(family)).toBe(true);

  // A lone grapheme cluster round-trips unchanged (no code-unit/code-point splitting).
  expect(reverseGraphemes(family)).toBe(family);
});
