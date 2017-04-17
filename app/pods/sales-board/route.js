import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route, RSVP, inject } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  sceance: inject.service(),

  model() {
    return RSVP.hash({
      countries: this.get('sceance').receive('country'),
      marks: this.get('sceance').receive('mark'),
    });
  }
});
