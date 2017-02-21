import Ember from 'ember';

export default Ember.Route.extend({
  sceance: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      countries: this.get('sceance').receive('country')
    });
  }
});
