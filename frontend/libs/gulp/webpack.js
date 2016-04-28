"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var webpack = require("webpack");

/**
 * webpack configuration
 * npm i gulp-webpack babel-loader html-loader babel-core  babel-preset-es2015 --save
 */
class Webpack{

    constructor(path){
        this.path = path;
    }

    build(){
        var config = {
            "entry": {
                "common": `${this.path.src}assets/js/common.js`
            },
            "output": {
                "filename": `[name].bundle.js`
            },
            module: {
                loaders: [
                    { test: /\.js/,exclude: /node_modules/, loader: "babel" ,query:{presets:"es2015"}},
                    { test: /\.html/, loader: "html" }
                ]
            },
            resolve: {
                extensions:["",".js"]
            },
            plugins:[
                new webpack.optimize.UglifyJsPlugin()
            ]
        };

        gulp.src([`${this.path.src}assets/js/**/*.js`])
            .pipe($.webpack(config))
            .pipe(gulp.dest(`${this.path.dest}assets/js/`))
    }

    watch(tasks){
        gulp.watch([
            `${this.path.src}assets/js/**/*.js`,
        ],tasks)
    }
}

module.exports = function(path){
    return new Webpack(path);
};
