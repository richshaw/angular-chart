'use strict';

module.exports = function (grunt) {

   // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // default task
  grunt.registerTask('default', ['jshint', 'karma']);

  // perform test in Firefox on travis ci
  var testConfig = function(configFile, customOptions) {
    var options = { configFile: configFile, keepalive: true };
    var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
    return grunt.util._.extend(options, customOptions, travisOptions);
  };

  grunt.initConfig({

    karma: {
      unit: {
        options: testConfig('test/karma.conf.js')
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: 'Gruntfile.js',
      angularChart: 'angular-chart.js',
      test: 'test/*.js',
      demo: 'demo/*.js'
    }

  });

};