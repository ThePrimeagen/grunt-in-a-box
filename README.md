grunt-in-a-box
==============

Grunt in a box is a prepackaged, opinionated grunt system for any javascript library.  It prefers convention over configuration.

Versioning
==========
Road map:
* 0.0.x: Basic libraries.  JSHint, requirejs, browserify
* 0.1.x: Javascript.next features
* 0.2.x: Karma support with auto serving coverage reports.

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

