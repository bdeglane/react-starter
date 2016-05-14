var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task('default', function() {});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(require('./webpack.config.js'), function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        callback();
    });
});
