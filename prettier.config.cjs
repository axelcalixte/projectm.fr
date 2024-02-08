module.exports = {
  options: {
    "bracketSameLine": true,
  },
  plugins: [
    require.resolve("prettier-plugin-astro"),
  ],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};
