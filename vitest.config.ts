import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig(() => {
  // Tests exercise the dev-domain path; production domain enforcement is
  // tested explicitly in tests/domain.test.ts.
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    process.env.NEXT_PUBLIC_SITE_URL_DEV = "1";
  }
  return {
    test: {
      include: ["tests/**/*.test.ts"],
      environment: "node",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
