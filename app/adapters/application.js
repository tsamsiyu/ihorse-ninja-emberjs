import DS from 'ember-data';
import Ember from 'ember';
import config from 'ihorse-ninja/config/environment';

const inflector = Ember.Inflector.inflector;

export default DS.JSONAPIAdapter.extend({
  namespace: 'v1',
  host: config.api.host,
/*  pathForType: function(modelName) {
    const lastSlashIndex = modelName.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      return inflector.pluralize(modelName.substring(lastSlashIndex + 1));
    } else {
      return modelName;
    }
  }*/
});
