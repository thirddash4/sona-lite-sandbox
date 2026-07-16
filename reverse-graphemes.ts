const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });

export function reverseGraphemes(str: string): string {
  return Array.from(segmenter.segment(str), (s) => s.segment)
    .reverse()
    .join("");
}
