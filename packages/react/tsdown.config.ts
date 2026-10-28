import { defineConfig } from "tsdown";

const ext = (platform: "web" | "native") => [
  `.${platform}.ts`,
  `.${platform}.tsx`,
  ".tsx",
  ".ts",
  ".js",
];

export default defineConfig([
  {
    entry: "./src/index.ts",
    outDir: "./dist/web",
    format: ["esm", "cjs"],
    platform: "browser",
    dts: true,
    unbundle: true,
    external: ["react", "react-dom", "react-native"],
    inputOptions: { resolve: { extensions: ext("web") } },
  },
  {
    entry: "./src/index.ts",
    outDir: "./dist/native",
    format: ["esm"],
    platform: "neutral",
    dts: true,
    unbundle: true,
    external: ["react", "react-native"],
    inputOptions: { resolve: { extensions: ext("native") } },
  },
]);
