import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

const local = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${local("./src/")}`,
      "@version": local("./version.json"),
      "@trilogy-react/theme": local("./src/constants/theme.ts"),
      "react-native": "react-native-web",
    },
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".jsx", ".js", ".json"],
    dedupe: ["react", "react-dom"],
  },
  test: {
    environment: "jsdom",
    include: ["src/components/**/*.web.test.{js,ts,tsx}"],
    setupFiles: ["./tests/setup.web.ts"],
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage/web",
      reporter: ["text", "html"],
      include: ["src/components/**/*.web.tsx"],
    },
  },
})
