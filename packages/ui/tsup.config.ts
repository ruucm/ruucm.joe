import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: false, // if it is true, it generate smaller chunks
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  ...options,
}));
