'use strict';

// Require modules
var fs = require('fs');
var path = require('path');
var ip = require('ip');

module.exports = function(options) {
  var pathAllMethods = path.join(options.read_dir);
  var allRoutes = [];

  fs.readdirSync(pathAllMethods).forEach(function(file) {

    if (/^\./.test(file)) {
      return;
    }

    var action = require(path.join(options.read_dir, file));
    var urlMethod = path.basename(file, '.js');

    options.server.route({
      method: action.method,
      path: options.prefix_path + '/' + urlMethod,
      handler: action
    });

    if (process.env.NODE_ENV === 'development') {
      var host = options.host || ip.address();
      allRoutes.push(host + ':' + options.port + options.prefix_path + '/' + urlMethod);
    }

  });

  // Only in environment developer
  if (process.env.NODE_ENV === 'development') {
    options.server.route({
      method: 'GET',
      path: options.prefix_path + '/' + '_all_methods',
      handler: function(request, reply) {
        reply(allRoutes);
      }
    });
  }

};
