import { defineConfig } from "tsup";
import prepend from "prepend-file";

export default defineConfig({
  entry: ["src/barrel.ts", "src/client-barrel.ts"],
  dts: true,
  clean: true,
  format: ["esm"],
  onSuccess: async () => {
    await prepend("./dist/index.js", `"use client";\n`);
  },
});
