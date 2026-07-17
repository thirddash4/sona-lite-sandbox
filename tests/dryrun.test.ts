import { expect, test } from "bun:test";
import { DRYRUN_OK } from "../src/dryrun";

test("DRYRUN_OK is true", () => {
  expect(DRYRUN_OK).toBe(true);
});
