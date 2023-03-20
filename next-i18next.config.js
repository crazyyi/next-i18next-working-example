const isBrowser = typeof window !== "undefined";

module.exports = {
  i18n: {
    locales: [
      "en",
      "kr",
      "zt",
      "zh",
      "es",
      "fr",
      "ms",
      "vi",
      "jp",
      "pseudo",
    ],
    defaultLocale: "en",
  },
  ns: ['home'],
  reloadOnPrerender: process.env.NODE_ENV === "development",
  defaultNS: 'home',
  localePath: isBrowser
    ? require("path").resolve("./public/locales")
    : require("path").resolve("./src/locales"),
  debug: true,
};
