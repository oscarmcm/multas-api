var GLOBAL_CONFIG = require('../global-config');
module.exports = {
  restApiRoot: GLOBAL_CONFIG.restApiRoot,
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 5000
};