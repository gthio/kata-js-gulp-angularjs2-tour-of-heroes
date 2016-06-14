module.exports = function(){

  var root = './';

  var build = root + '.build/';
  var buildApp = build + 'app/';

  var client = './';
  var clientApp = client + 'app/';
  
  var gulpConfig = {
      
    build: build,
    buildApp: buildApp,
    
    client: client,
    clientApp: clientApp,
    indexFile: client + 'index.html',
    
    tsAppFiles: [
      'app/**/*.ts',
      ],
      
    tsFiles: [
      'app/**/*.ts',
      'typings/browser.d.ts'
      ],     
      
    jsFiles: [
      clientApp + '**/*.js'
    ],
    
    bower: {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    }
  };  

  gulpConfig.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: gulpConfig.bower.json,
      directory: gulpConfig.bower.directory,
      ignorePath: gulpConfig.bower.ignorePath
    };
  };
  
  return gulpConfig;
};