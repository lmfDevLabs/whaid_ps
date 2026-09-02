module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2022,
    "sourceType": "module",
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
    {
      files: ["src/controllers/demo.controller.js", "src/routes/demo.routes.js", "src/services/*.service.js", "src/validation/demo.schema.js", "test/*.test.js"],
      rules: {
        "max-len": "off",
        "require-jsdoc": "off",
      },
    },
  ],
  globals: {},
};
