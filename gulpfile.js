var gulp = require('gulp');
var util = require('gulp-util');
var del = require('del');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var gulpPrint = require('gulp-print');
var gulpIf = require('gulp-if');

var args = require('yargs').argv;

var gulpConfig = require('./gulp.config')();
var tsConfig = require('./tsconfig.json');

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('tscompile', function(){
  return gulp
    .src(gulpConfig.tsFiles)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(sourcemaps.init())
    .pipe(typescript(tsConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(gulpConfig.buildApp));
});

gulp.task('tslint', function(){
  return gulp
    .src(gulpConfig.tsFiles)
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('clean-build', function(done){
  clean(gulpConfig.build, done);
});

gulp.task('test', function(done){
  log('test');
});

function clean(path, done){
  log('Cleaning: ' + $.util.colors.blue(path));
  del(path).then(done());
}

function log(msg){
  if (typeof(msg) === 'object'){
    for (var item in msg){
	  if (msg.hasOwnProperty(item)){
	    util.log(util.colors.blue(msg[item]));
	  }
	}
  }	
  else {
    util.log(util.colors.blue(msg));
  }
}