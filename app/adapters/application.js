import DS from 'ember-data';
// import Ember from 'ember';
import config from 'iron-app/config/environment';

// const inflector = Ember.Inflector.inflector;

export default DS.JSONAPIAdapter.extend({
  namespace: config.api.namespace,
  host: config.api.domain,
/*  pathForType: function(modelName) {
    const lastSlashIndex = modelName.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      return inflector.pluralize(modelName.substring(lastSlashIndex + 1));
    } else {
      return modelName;
    }
  }*/
});
