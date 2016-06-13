var gulp = require('gulp');
var util = require('gulp-util');
var del = require('del');
var gulpConfig = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy: true});

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