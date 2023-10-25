import { defineConfig } from "vitest/dist/config";
export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
  },
});
