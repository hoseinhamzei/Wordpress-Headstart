const {src, dest, series, watch} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const livereload = require('gulp-livereload');


function bundleCssLibs(cb){
    src('src/style/libs/*.css')
    .pipe(concat('libs.css'))
    .pipe(uglifycss())
    .pipe(dest('dist/'))
    cb();
}

function copyCSS(cb){
    src(['src/style/*.css', '!src/style/style.css'])
        .pipe(uglifycss())
        .pipe(dest('dist/'))
        .pipe(livereload());
    cb();
}

function copyFonts(cb){
    src('src/style/fonts/*')
        .pipe(dest('dist/fonts'))
    cb();
}

function compileJS(cb){
    src(['src/js/libs/*.js','src/js/*.js'])
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('dist/'))
        .pipe(livereload());
    cb();
}

function compileSASS(cb){
    src('src/style/style.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(uglifycss())
     .pipe(dest('dist/'))
     .pipe(livereload());
    cb();
}


function start(cb){
    livereload.listen();
    watch('src/style/*.scss', compileSASS);
    watch(['src/style/*.css', '!src/style/style.css'], copyCSS);
    watch('src/js/*.js', compileJS);
    
    cb()
}


exports.build = series(bundleCssLibs, copyCSS, copyFonts, compileJS, compileSASS);
exports.start = start;


