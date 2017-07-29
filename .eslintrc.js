module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  },
  env: {
    "shared-node-browser": true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
