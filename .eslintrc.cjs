module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "eslint:recommended",
    "eslint:all",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "detect" } },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
