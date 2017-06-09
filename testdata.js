const fs = require("fs");

fs.writeFileSync(
  "bench.json",
  JSON.stringify([
    { name: "simple", value: Math.random() },
    { name: "complex", value: Math.random() }
  ])
);
