module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
  ],
}
