grunt-in-a-box
==============

Grunt in a box is a prepackaged, opinionated grunt system for any javascript library.  It prefers convention over configuration.

Roadmap
==========
* 0.0.x: Basic libraries.  JSHint, requirejs, browserify
  * Done by end of February
* 0.1.x: Javascript.next features
  * Done by end of March
* 0.2.x: Karma support with auto serving coverage reports.
  * Done by end of April

How to use
==========
```javascript
// Gruntfile.js
module.exports = function(grunt) {
    require('grunt-in-a-box')(grunt[, options]);
};
```

The options provided can turn on and off libraries that are supported. Any additional supported libraries can be loaded through
`initConfig` in `options`.

Additional Tasks
----------------
Loading additional libraries is easy.  Simply provide the libraries you wish to be apart of the `grunt.initConfig` call by overriding `initConfig` in the `options` argument.
```javascript
// Gruntfile.js
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-customTask');
    require('grunt-in-a-box')(grunt, {
        initConfig: {
            customTask: { .. }
        }
    });
};
```

Supported Libraries
===================
Review the versioning to know what the road map is.

Progress
---------
0.0.1:  Started the project
0.0.2:  JSHint
0.0.3:  Clean

JSHint
--------
* defaults `jshint: true`
```javascript
{
    jshint: true, // it already defaults to true
    jshintOptions: {
        all: [
            'Gruntfile.js',
            'src/**/*.js',
            'test/**/*.js'
        ]
    }
}
```

Clean
--------
* deafults `clean: true`
```javascript
{
    build: ['tmp/', 'bin/', 'dist/']
}
```
