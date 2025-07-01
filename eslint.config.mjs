import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactNative from "eslint-plugin-react-native";


export default defineConfig([
  { 
    files: ["**/*.{ts,tsx}"], 
    plugins: { 
      js,
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative,
    }, 
    extends: [
      "js/recommended",  // core js best practices enforced
    ], 
    rules: {
      "no-console": "error", // custom rule to prevent console logs
      "react-hooks/rules-of-hooks": "error", // enforces correct usage of hooks
      "react-hooks/exhaustive-deps": "warn", // analyze dep array 
      "react-native/no-inline-styles": "warn",
      "react-native/no-unused-styles": "warn",
      "react-native/no-color-literals": "off",
      "react-native/split-platform-components": "off", // or "warn"
      "react-native/no-raw-text": "off", // adjust for JSX
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

    } 
  },
  { 
    files: ["**/*.{ts,tsx}"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  tseslint.configs.recommended, // core Ts rules like no unused vars
  pluginReact.configs.flat.recommended,
]);