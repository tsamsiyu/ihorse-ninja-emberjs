import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession: function () {
      this.get('session').invalidate();
    }
  }
});
