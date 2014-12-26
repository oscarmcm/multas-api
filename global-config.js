/*
 * Global configuration shared by components.
 */
var pkg = require('./package.json');
var version = pkg.version.split('.').shift();

// The path where to mount the REST API app
//exports.restApiRoot = '/api';
exports.restApiRoot ='/api' + (version > 0 ? '/v' + version : '');

// The URL where the browser client can access the REST API is available
// Replace with a full url (including hostname) if your client is being
// served from a different server than your REST API.
exports.restApiUrl = exports.restApiRoot;