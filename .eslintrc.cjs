module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "import"],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "error",
      {
        // グループの順番
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        // グループ感に空行追加しない
        "newlines-between": "never",
        pathGroupsExcludedImportTypes: ["builtin"],
        // ABC 順。大文字小文字を区別しない
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // react 関連を先頭に
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
          {
            pattern: "{@/libs/**,@/features/**,@/app/**}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/components/**,@/pages/**}",
            group: "internal",
            position: "before",
          },
          // css modules は一番最後にする
          {
            pattern: "./**.module.css",
            group: "index",
            position: "after",
          },
        ],
      },
    ],
  },
};
