var path = require('path');
var _ = require('lodash');
var MODULES = ['clean', 'jshint', 'mocha'];
var BUILD_MODULES = ['clean', 'jshint'];
var TEST_MODULES = ['jshint', 'mocha'];

/**
 * The main entry point into the grunt-in-a-box program.  This is where the configuration is passed in.
 * @param grunt
 */
module.exports = function(grunt, options) {
    var settings = _.assign({

        // JSHint is defaulted to true.  Override any jshint options from tasks/options/jshint by overriding jshintOptions
        jshint: true,
        jshintTaskName: 'grunt-contrib-jshint',

        // Clean
        clean: true,
        cleanTaskName: 'grunt-contrib-clean',

        // Mocha
        mocha: false,
        mochaTaskName: 'grunt-mocha'
    }, options);
    var config = {};

    /**************************************************************
     * Required for loading modules from within this submodule.
     *
     * All code below will look within grunt-in-a-box's node_modules for
     * grunt tasks.
     *///----------------------------------------------------------
    var cwd = process.cwd();
    process.chdir(path.join(__dirname, '..'));

    // Loads every module
    _.forEach(MODULES, function(k) {
        if (settings[k]) {
            grunt.loadNpmTasks(settings[k + 'TaskName']);
            config[k] = loadConfig(k);
        }
    });

    var buildModules = _.filter(BUILD_MODULES, function(k) { return settings[k]; });
    var testModules = _.filter(TEST_MODULES, function(k) { return settings[k]; });

    /**************************************************************
     * Required for loading modules from within this submodule.
     *
     * Process reset back to original cwd.
     *///----------------------------------------------------------
    process.chdir(cwd);

    grunt.initConfig(config);
    grunt.registerTask('default', buildModules);
    grunt.registerTask('build', buildModules);
    grunt.registerTask('test', testModules);
};

function loadConfig(module) {
    return require('./tasks/options/' + module);
}