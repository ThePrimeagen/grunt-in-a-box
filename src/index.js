var _ = require('lodash');
var MODULES = ['jshint'];
var BUILD_MODULES = ['jshint'];
var TEST_MODULES = ['jshint'];

/**
 * The main entry point into the grunt-in-a-box program.  This is where the configuration is passed in.
 * @param grunt
 */
module.exports = function(grunt, options) {
    var settings = _.assign({

        // JSHint is defaulted to true.  Override any jshint options from tasks/options/jshint by overriding jshintOptions
        jshint: true,
        jshintTaskName: 'grunt-contrib-jshint',
        jshintOptions: {}
    }, options);
    var config = {};


    // Loads every module
    _.forEach(MODULES, function(k) {
        if (settings[k]) {
            grunt.loadNpmTasks(settings[k + 'TaskName']);
            config[k] = _.assign(loadConfig(k), settings[k + 'Options']);
        }
    });

    var buildModules = _.filter(BUILD_MODULES, function(k) { return settings[k]; });

    grunt.initConfig(config);
    grunt.registerTask('default', buildModules);
    grunt.registerTask('build', buildModules);
};

function loadConfig(module) {
    return require('./tasks/options/' + module);
}