import Ember from 'ember';

export default Ember.Service.extend({
  take() {
    return this.get('_model');
  },
  populate(model) {
    this.set('_model', model);
  }
});
