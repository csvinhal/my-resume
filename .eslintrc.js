module.exports = {
  extends: "react-app",
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  globals: {
    window: true,
    localStorage: true,
    document: true,
  },
  parser: "babel-eslint",
};
