import Ember from 'ember';

export default Ember.Object.extend({
  values: {},
  opened: true,
  committed: false,

  commit() {
    this.set('committed', true);
  },
  close() {
    this.set('opened', false);
  },
  open() {
    this.set('opened', true);
  }
});
