'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {};

    config['watch'] = {
        compass: {
            files: ['scss/{,*/}*.{scss,sass}'],
            tasks: ['compass:server']
        }
    };

    config['compass'] = {
        options: {
           sassDir: 'scss',
           cssDir: 'css'
        },
        dist: {},
        server: {}
    };

    grunt.initConfig(config);

    var tasks = [
       'watch',
      'compass:dist'
    ];

    grunt.registerTask('build', tasks);
};
