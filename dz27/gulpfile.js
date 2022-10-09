const { src, dest, parallel, watch, series } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
var clean_file = require("gulp-clean");

const clean = () => src("./dist", { read: false }).pipe(clean_file());

const js = () =>
  src("./src/**.js").pipe(babel()).pipe(uglify()).pipe(dest("./dist/"));

const js_dev = () => src("./src/*.js").pipe(dest("./dist/"));

const html = () => src("./src/*.html").pipe(dest("./dist/"));

const css = () =>
  src("./src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/"));

const b_sync = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("./src/*.js").on("change", js_dev);
  watch("./src/*.scss").on("change", css);
  watch("./src/*.**").on("change", browserSync.reload);
};

exports.dev = series(clean, parallel(js_dev, html, css), b_sync);
exports.run = b_sync;
exports.default = series(clean, parallel(js, html, css));
