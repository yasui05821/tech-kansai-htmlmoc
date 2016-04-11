"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var bourbon = require("node-bourbon");
var neat = require("node-neat");

/**
 * SCSS with bourbon neat
 * npm i gulp-sass node-bourbon node-neat --save
 */
class Sass{

    constructor(path){
        this.path = path;
    }

    bourbon(){
        gulp
            .src([
                `${this.path.src}assets/scss/**/*.scss`,
                `!${this.path.src}assets/scss/**/_*`,
            ])
            .pipe($.plumber({
                errorHandler: $.notify.onError('<%= error.message %>')
            }))
            .pipe($.sass({
                sourceMap: true,
                includePaths: bourbon.with(neat.includePaths)
            }))
            .pipe(gulp.dest(`${this.path.dest}assets/css/`));
    }

    watch(tasks){
        gulp.watch([
                `${this.path.src}assets/scss/**/*.scss`,
            ],tasks)
    }
}

module.exports = function(path){
    return new Sass(path);
};
