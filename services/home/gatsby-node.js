require('ts-node').register({ project: './gatsby/tsconfig.json' });

exports.createPages = require('./gatsby/node').createPages;
exports.createSchemaCustomization = require('./gatsby/node').createSchemaCustomization;
