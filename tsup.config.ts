import { defineConfig } from "tsup";
import prepend from "prepend-file";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  format: ["esm"],
  onSuccess: async () => {
    await prepend("./dist/index.js", `"use client";\n`);
  },
});
