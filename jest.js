module.exports = {
  plugins: [
    "jest",
  ],

  extends: [
    "kontent-ai",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],

  rules: {
    "jest/expect-expect": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-test-return-statement": "error",
    "jest/prefer-called-with": "error",
    "jest/prefer-comparison-matcher": "error",
    "jest/prefer-equality-matcher": "error",
    "jest/prefer-expect-assertions": ["error", { onlyFunctionsWithAsyncKeyword: true }],
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-todo": "error",
    "jest/require-top-level-describe": "error",

  },
};
