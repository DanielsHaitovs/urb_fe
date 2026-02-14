// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import prettier from "eslint-plugin-prettier";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  {
    ignores: ["node_modules/", ".next/", "dist/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
      prettier,
      sonarjs,
    },
    languageOptions: {
      parser: tseslint.parser, // enable TS parser
      parserOptions: {
        project: "./tsconfig.json", // 👈 IMPORTANT: point to your TS config
        tsconfigRootDir: process.cwd(),
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js
      "@next/next/no-html-link-for-pages": "off",

      // TypeScript
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      "@typescript-eslint/no-unnecessary-condition": [
        "warn",
        {
          allowConstantLoopConditions: true,
          checkTypePredicates: true,
        },
      ],

      // SonarJS
      "sonarjs/disabled-resource-integrity": "error",

      // Prettier
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
