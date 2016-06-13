module.exports = function(){

  var root = './';
  var build = root + '.build/';
  
  var gulpConfig = {
      
    build: build,
    
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