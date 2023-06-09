module.exports = {
  plugins: [
    "react",
    "react-hooks",
  ],

  extends: [
    "@kontent-ai",
  ],

  rules: {
    "react/hook-use-state": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-spacing": [
      "error", {
        when: "never",
        attributes: true,
        children: true,
      },
    ],
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-fragments": "error",
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
    "react/no-danger": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/no-typos": "error",
    "react/no-this-in-sfc": "error",
    "react/self-closing-comp": "error",
    "react/void-dom-elements-no-children": "error",
    "react/style-prop-object": "error",
    "react/jsx-no-leaked-render": "off",
    "react/prefer-stateless-function": "error",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
}
