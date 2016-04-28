"use strict"
/**
 * common installers
 * npm i gulp gulp-load-plugins gulp-plumber gulp-notify run-sequence --save
 */
var gulp = require("gulp");
var runSequence = require("run-sequence");

var setting = require("./frontend/libs/gulp/setting.js")

if(process.env.APP_MODE=="build"){
    var path = setting("./frontend/","./build/")
}else{
    var path = setting("./frontend/","./public/")
}

var tasks = require("./frontend/libs/gulp/gulp-tasks.js")(path);

gulp.task("sass",()=>{tasks.sass().bourbon()});
gulp.task("watch:sass",()=>{tasks.sass().watch(["sass"])});

gulp.task("jade",()=>{tasks.jade().build({})});
gulp.task("watch:jade",()=>{tasks.jade().watch(["jade"])});

gulp.task("webpack",()=>{tasks.webpack().build()});
gulp.task("watch:webpack",()=>{tasks.webpack().watch(["webpack"])});

gulp.task("server",()=>{tasks.browserSync().start()});

gulp.task("watch",[
    "watch:sass",
    //"watch:jade",
    //"watch:webpack",
]);

gulp.task("build",function(cb){
    runSequence([
        "sass",
        //"jade",
        //"webpack"
    ],cb);
});

gulp.task("default",["watch"])

