import { defineConfig } from "tsup";
import prepend from "prepend-file";

export default defineConfig({
  entry: ["src/isomorphic.ts", "src/client.ts"],
  dts: true,
  clean: true,
  format: ["esm"],
  onSuccess: async () => {
    await prepend("./dist/client.js", `"use client";\n`);
  },
});
