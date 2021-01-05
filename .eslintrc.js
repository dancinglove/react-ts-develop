module.exports = {
  parser: "@typescript-eslint/parser", // 可以把代码转化成语法树
  plugins: ["@typescript-eslint"],
  rules: {
    "no-var": "error", // 不能有额外的var变量
    "no-extra-semi": "error", // 不能有额外的分号
    "@typescript-eslint/indent": ["error", 2], // 缩进只能两个
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
};
