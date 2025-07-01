import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactNative from "eslint-plugin-react-native";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    plugins: { 
      js,
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative,
    }, 
    extends: [
      "js/recommended",  // core js best practices enforced
      "plugin:react-native/all" // recommended rules like no inline styles or unused styles
    ], 
    rules: {
      "no-console": "error", // custom rule to prevent console logs
      "react-hooks/rules-of-hooks": "error", // enforces correct usage of hooks
      "react-hooks/exhaustive-deps": "warn", // analyze dep array 

    } 
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  tseslint.configs.recommended, // core Ts rules like no unused vars
  pluginReact.configs.flat.recommended,
]);