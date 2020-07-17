module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-console": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 'indent': [2], // 强制使用一致的缩进
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
