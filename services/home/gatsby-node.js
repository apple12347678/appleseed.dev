/* eslint-disable */
require('ts-node').register({ project: './gatsby/tsconfig.json' });

exports.createPages = require('./gatsby/node').createPages;
exports.createSchemaCustomization =
  require('./gatsby/node').createSchemaCustomization;
exports.onCreateBabelConfig = require('./gatsby/node').onCreateBabelConfig;
