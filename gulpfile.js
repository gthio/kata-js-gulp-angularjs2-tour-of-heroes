var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('test', function(done){
  log('test');
});

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