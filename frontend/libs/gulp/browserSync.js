"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var php = require("gulp-connect-php");
var browserSync = require("browser-sync");

/**
 * browser sync
 * npm install browser-sync gulp-connect-php --save
 */
class BrowserSync{

    constructor(path){
        this.path = path;
    }

    start(){
        php.server({
            base: `${this.path.dest}`,
        },function(){
            browserSync({
                proxy: "127.0.0.1:8000",
                open: "external",
                //notify: false
            })
        });

        gulp.watch([
            `${this.path.dest}/**/*`
        ], function(){
            setTimeout(function(){
                browserSync.reload();
            },500);
        });
    }
}

module.exports = function(path){
    return new BrowserSync(path);
};
