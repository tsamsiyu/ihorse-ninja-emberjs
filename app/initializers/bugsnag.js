import Ember from 'ember';

export default {
  name: 'bugsnag',

  initialize: function(/*container*/) {
    Ember.onerror = function(error) {
      Ember.Logger.error(error.stack);
    };
  }
};
