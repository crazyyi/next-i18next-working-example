const gulp = (await import("gulp")).default;
const watch = (await import("gulp-watch")).default;

async function i18next() {
  const i18nextParser = (await import("i18next-parser")).gulp;
  const { i18n } = (await import("./next-i18next.config.js")).default;
  gulp
    .src(["./src/pages/**", "./src/components/**", "./src/lib/**"])
    .pipe(
      new i18nextParser({
        locales: i18n.locales,
        output: "./locales/$LOCALE/$NAMESPACE.json",
      })
    )
    .pipe(gulp.dest("./src"));
}

gulp.task('i18next', i18next)

gulp.task("watchTranslations", function () {
  return watch(
    ["./src/pages/**", "./src/components/**", "./src/lib/**"],
    { ignoreInitial: false },
    async function () {
      await i18next();
    }
  );
});

gulp.task("publish", async function() {
  gulp
    .src(["./src/locales/**"])
    .pipe(gulp.dest("./public/locales"))
})
