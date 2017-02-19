import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sceance: Ember.inject.service(),

  model() {
    return this.get('sceance').receive('mark');
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    ooops(error) {
      alert('Ooops, something went wrong');
    }
  }
});
