module.exports = function(){

  var root = './';
  var build = root + '.build/';
  
  var buildApp = build + 'app/';
  
  var gulpConfig = {
      
    build: build,
    buildApp: buildApp,
    
    tsAppFiles: [
      'app/**/*.ts',
      ],
      
    tsFiles: [
      'app/**/*.ts',
      'typings/browser.d.ts'
      ],      
  };  
  
  return gulpConfig;
};