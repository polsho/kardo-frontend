module.exports = {
    extends: [
      "plugin:postcss-modules/recommended",
    ],
  
    rules: {
      "postcss-modules/no-undef-class": "error",
      "postcss-modules/no-unused-class": "warn",
    },
  
    settings: {
      "postcss-modules": {
        include: "**/*.module.(css|scss)",
        exclude: "**/node_modules/**/*",
      },
    },
  };