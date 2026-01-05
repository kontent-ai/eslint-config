import reactPlugin from "eslint-plugin-react";
import baseConfig from "./index.js";
import { defineConfig } from "eslint/config";

export default defineConfig([{
  extends: [baseConfig],
  plugins: {
    react: reactPlugin,
  },
  rules: {
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-max-props-per-line": "error",
    "react/jsx-no-bind": [
      "error",
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/no-typos": "error",
    "react/no-this-in-sfc": "error",
    "react/style-prop-object": "error",
  },
}]);
