/* jshint node: true */
var merge = require('lodash/merge');

function loadEnvConfig(name) {
  let env = {};
  try {
    env = require('./environments/' + name);
  } catch (e) {}
  return env;
}

module.exports = function(environment) {
  const currentEnv = loadEnvConfig(environment);
  const localEnv = loadEnvConfig('local');

  var ENV = merge(currentEnv, localEnv, {
    appName: 'IronDock',
    shortAppName: 'ID',
    modulePrefix: 'iron-app',
    podModulePrefix: 'iron-app/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  });

  ENV['ember-simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'authorizer:bearer',
    crossOriginWhitelist: [ENV.api.domain],
    routeAfterAuthentication: '/',
    routeIfAlreadyAuthenticated: '/',
    authenticationRoute: '/signin'
  };

  ENV.contentSecurityPolicy = {
    'connect-src': ENV.api.domain
  };

  if (environment === 'development') {
    ENV.stackTraceLimit = 35;
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.stackTraceLimit = 35;
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
