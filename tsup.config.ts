import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/isomorphic.ts", "src/client.ts"],
  dts: true,
  clean: true,
  format: ["esm"],
});
