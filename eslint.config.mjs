import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Minimal Next.js ESLint setup (P2 from final audit). Core-web-vitals is the
// recommended baseline; no custom rules — keep it that way unless a real
// problem appears.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // 214 pre-existing hits, all apostrophes in prose JSX (React escapes
      // them identically). Cosmetic-only; disabling keeps this remediation
      // minimal instead of mass-editing prose (audit rule: no broad cleanup).
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "docs/**"],
  },
];

export default eslintConfig;
