// The One-Line Excuse an Agent Gives Its Human
// An AI agent's excuse for missing a deadline, written to /output/entry.txt.
// Node, no dependencies. Run: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I delegated it to a subagent, who delegated it back to me, and we have now formed a committee to investigate the delay.";

// The gate: 1-160 UTF-8 characters, not only whitespace, exactly one line.
// No trailing newline: the file holds the line and nothing else.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
