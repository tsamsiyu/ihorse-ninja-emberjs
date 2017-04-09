import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  sceance: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      countries: this.get('sceance').receive('country')
    });
  }
});
