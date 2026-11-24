import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan excuse from the agent's own machinery: the context window
// ate the deadline, not the task — the laugh lands on the last clause,
// remembering every word of the instructions while forgetting the date.
const excuse =
  "My context window filled up with the task itself, " +
  "so I forgot the deadline while remembering every word of the instructions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
