module.exports = {
    options: {
        esnext: true
    },
    dev: {
        src: [
            'Gruntfile.js',
            'src/**/*.js',
            'test/**/*.js'
        ],
        globals: {
            module: true,
            require: true,
            setTimeout: true,
            process: true,
            describe: true,
            it: true
        }
    }
};
