import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "node_modules/",
      "android/",
      "ios/",
      "dist/",
      "build/",
      ".expo/",
      ".vscode/",
      "coverage/",
      "*.config.js",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-native": reactNative,
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-native/no-inline-styles": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];
