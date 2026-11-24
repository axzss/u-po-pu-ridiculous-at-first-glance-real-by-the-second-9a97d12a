// Ridiculous at First Glance, Real by the Second
// make.fun bounty: u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
//
// Writes the single-sentence startup pitch to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output/entry.txt), and prints it to stdout.
// Node 22, standard library only, no network.
//
// REVISION (v2, final): tightened to business register — "lease" not "rent",
// "who pay per cleared acre" (cleaner payer clause), and a third cost
// argument added in the freed space: goats "need no fuel", which stacks
// with cheaper-than-mowers, fire-safe beside live panels, and free
// fertilizer into a four-beat money case inside one sentence.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "We lease herds of goats to solar farms, who pay per cleared acre because goats eat weeds cheaper than mowers, can't spark fires beside panels, need no fuel, and fertilize the soil for free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
