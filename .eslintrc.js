module.exports = {
    extends: [
        "@vue/typescript",
        "airbnb-base",
        "plugin:vue/recommended"
    ],
    rules: {
      // override/add rules settings here, such as:
      'no-unused-vars': 1,
      'comma-spacing': 1,
      'comma-dangle': 0,
      'no-trailing-spaces': 1,
      'import/no-unresolved': 0,
      'max-len': 1,
      'space-in-parens': 1,
      'import/extensions': 0
    }
  }